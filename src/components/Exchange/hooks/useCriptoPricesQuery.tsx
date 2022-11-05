import { UseBaseQueryResult, useQuery } from "react-query"
import { CriptoInfo } from "../../../types"
import { getCriptoPrices } from "../services"

const QUERY_KEY = 'criptoPrices'

type Return = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
    coinInfo: CriptoInfo
}

type Params = {
    id: string
}

type UseCriptoPricesQuery = (params: Params) => Return

export const useCriptoPricesQuery: UseCriptoPricesQuery = ({ id }) => {
    const { data, isLoading, isError } = useQuery(QUERY_KEY, () => getCriptoPrices({ id }))

    const coinInfo = data ?? {}
    
    return {
        isLoading,
        isError,
        coinInfo
    }
}