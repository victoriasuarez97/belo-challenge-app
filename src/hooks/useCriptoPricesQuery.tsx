import { UseBaseQueryResult, useQuery } from "react-query"
import { getCriptoPrices } from "../services/getCriptoPrices"
import { CriptoInfo } from "../types"

const QUERY_KEY = 'criptoPrices'

type Return = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
    coinInfo: CriptoInfo
}

type Params = {
    id: string
    currency: string
}

type UseCriptoPricesQuery = (params: Params) => Return

export const useCriptoPricesQuery: UseCriptoPricesQuery = ({ id, currency }) => {
    const { data, isLoading, isError, isSuccess } = useQuery([QUERY_KEY, id, currency], () => getCriptoPrices({ id, currency }), {
        enabled: currency !== ''
    })

    const coinInfo = (isSuccess && data) ?? {}
    
    return {
        isLoading,
        isError,
        coinInfo
    }
}