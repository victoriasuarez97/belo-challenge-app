import { UseBaseQueryResult, useQuery } from "react-query"
import { Coins, CriptoInfo } from "../../../types"
import { getCriptoPrices } from "../services"

const QUERY_KEY = 'criptoPrices'

type Return = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
    prices: CriptoInfo[]
    coins?: Coins[] | string[]
}

type UseCriptoPricesQuery = () => Return

export const useCriptoPricesQuery: UseCriptoPricesQuery = () => {
    const { data, isLoading, isError } = useQuery(QUERY_KEY, getCriptoPrices)

    const prices = [data]

    const coins = data ? Object.keys(data) : []

    return {
        isLoading,
        isError,
        prices,
        coins
    }
}