import { useState } from "react"
import { UseBaseQueryResult, useQuery } from "react-query"
import { useBalanceContext } from "../../../context"
import { getTotalBalance } from "../../../utils"
import { getDollarBluePrice } from "../services/getDollarBluePrice"

const QUERY_KEY = 'dollarPrice'

type Params = {
    ARSPriceIsLoading: UseBaseQueryResult['isLoading']
}

type Return = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
    balance: number
}

type UseDollarBlueQuery = (params: Params) => Return

export const useDollarBlueQuery: UseDollarBlueQuery = ({ ARSPriceIsLoading }) => {
    const [balance, setBalance] = useState<number>(0)
    
    const {  holding } = useBalanceContext()

    const { isLoading, isError } = useQuery(QUERY_KEY, getDollarBluePrice, {
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