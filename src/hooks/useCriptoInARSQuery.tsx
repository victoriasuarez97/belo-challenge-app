import { UseBaseQueryResult, useQuery } from "react-query"
import { getCriptoInARS } from "../services/getCriptoInARS"
import { CriptoInfo } from "../types"

const QUERY_KEY = 'criptoPrices'

type Return = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
    coinInARS: CriptoInfo
}

type UseCriptInARSQuery = () => Return

export const useCriptInARSQuery: UseCriptInARSQuery = () => {
    const { data, isLoading, isError } = useQuery(QUERY_KEY, getCriptoInARS)

    const coinInARS = data ?? {}

    return {
        isLoading,
        isError,
        coinInARS
    }
}