import { UseBaseQueryResult, useQuery } from "react-query"
import { useBalanceContext } from "../context"
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
    const { swapCoin } = useBalanceContext()
    const { data, isLoading, isError } = useQuery([QUERY_KEY, id, currency], () => getCriptoPrices({ id, currency }), {
        enabled: swapCoin !== undefined
    })

    const coinInfo = data ?? {}
    
    return {
        isLoading,
        isError,
        coinInfo
    }
}