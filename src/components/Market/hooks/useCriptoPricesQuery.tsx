import { UseBaseQueryResult, useQuery } from "react-query"
import { getCriptoPrices, Response } from "../services"

const QUERY_KEY = 'criptoPrices'

type Return = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
    prices: Response[]
    coins: string[]
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