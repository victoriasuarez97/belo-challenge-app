import { UseBaseQueryResult, useQuery } from "react-query"
import { getCriptoPrices } from "../services/getCriptoPrices"
import { CoinInfo } from "../types"

const QUERY_KEY = 'criptoPrices'

type Return = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
    coinInfo: CoinInfo
}

type Params = {
    id: string
    currency: string
}

type UseCriptoPricesQuery = (params: Params) => Return

export const useCriptoPricesQuery: UseCriptoPricesQuery = ({ id, currency }) => {
    const { data, isLoading, isError } = useQuery([QUERY_KEY, id, currency], () => getCriptoPrices({ id, currency }), {
        enabled: id !== '' && currency !== ''
    })

    const coinInfo = data ?? {}
    
    return {
        isLoading,
        isError,
        coinInfo
    }
}