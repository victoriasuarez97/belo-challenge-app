import { UseBaseQueryResult, useQuery } from "react-query"
import { useBalanceContext } from "../../../context"
import { getTotalBalance } from "../../../utils"
import { getDollarBluePrice } from "../services/getDollarBluePrice"

const QUERY_KEY = 'dollarPrice'

type Return = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
}

type UseDollarBlueQuery = () => Return

export const useDollarBlueQuery: UseDollarBlueQuery = () => {
    const { setBalance, holding } = useBalanceContext()

    const { isLoading, isError } = useQuery(QUERY_KEY, getDollarBluePrice, {
        onSuccess: (data) => {
            const totalBalance = getTotalBalance(holding, data.blue)
            setBalance(totalBalance)
        }
    })

    return {
        isLoading,
        isError
    }
}