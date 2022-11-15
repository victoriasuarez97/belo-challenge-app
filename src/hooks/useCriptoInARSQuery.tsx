import { UseBaseQueryResult, useQuery } from "react-query"
import { useBalanceContext } from "../context"
import { getCriptoInARS } from "../services/getCriptoInARS"
import { getCriptoBalanceInARS } from "../utils"

const QUERY_KEY = 'arsPrices'

type Return = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
}

type UseCriptoInARSQuery = () => Return

export const useCriptoInARSQuery: UseCriptoInARSQuery = () => {
    const { holding, setHolding } = useBalanceContext()

    const { isLoading, isError } = useQuery([QUERY_KEY, holding], getCriptoInARS, {
        onSuccess: (data) => {
            const newHolding = holding.map((coin) => ({...coin, ars: getCriptoBalanceInARS(coin.balance, data[coin.id].ars)}))
            setHolding(newHolding)
        }
    })

    return {
        isLoading,
        isError
    }
}