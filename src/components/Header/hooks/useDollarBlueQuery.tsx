import { useState } from "react"
import { useQuery } from "react-query"
import { useBalanceContext } from "../../../context"
import { getTotalBalance } from "../../../utils"
import { getDollarBluePrice } from "../services/getDollarBluePrice"
import { UseDollarBlueQuery } from "../types"

const QUERY_KEY = 'dollarPrice'

export const useDollarBlueQuery: UseDollarBlueQuery = ({ ARSPriceIsLoading }) => {
    const [balance, setBalance] = useState<number>(0)
    
    const { holding } = useBalanceContext()

    const { isLoading, isError } = useQuery([QUERY_KEY, holding], getDollarBluePrice, {
        onSuccess: (data) => {
            const totalBalance = getTotalBalance(holding, data.blue)
            setBalance(totalBalance)
        },
        enabled: !ARSPriceIsLoading
    })

    return {
        balance,
        isLoading,
        isError
    }
}
