/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, FC, ReactNode, useContext, useState } from "react"
import { HOLDINGS } from "../../constants/common"
import { CriptoBalance } from "../../types"
import { BalanceContext as BalanceContextType } from "./types"

const contextDefaultValues: BalanceContextType = {
    balance: 0,
    setBalance: () => {},
    chosenCoin: undefined,
    setChosenCoin: () => {},
    holding: [],
    conversion: 0,
    setConversion: () => 0,
    amount: '0',
    setAmount: () => '0',
    swapCoin: {
        id: '',
        name: '',
        ticker: '',
        balance: 0,
        currency: '' 
    },
    setSwapCoin: () => ({
        id: '',
        name: '',
        ticker: '',
        balance: 0,
        currency: '' 
    }),
    setHolding: () => ([])
}

type Props = {
    children: ReactNode
}

const BalanceContext = createContext<BalanceContextType>(contextDefaultValues)

const BalanceContextProvider: FC<Props> = ({ children }) => {
    const [balance, setBalance] = useState<number>(10000)

    const [chosenCoin, setChosenCoin] = useState<CriptoBalance|undefined>(undefined)

    const [swapCoin, setSwapCoin] = useState<CriptoBalance>({
        id: '',
        name: '',
        ticker: '',
        balance: 0,
        currency: '' 
    })

    const [amount, setAmount] = useState<string>('0')

    const [holding, setHolding] = useState(HOLDINGS)

    const [conversion, setConversion] = useState<number>(0)

    return(
        <BalanceContext.Provider value={{
            balance,
            setBalance,
            chosenCoin,
            setChosenCoin,
            holding,
            conversion,
            setConversion,
            amount,
            setAmount,
            swapCoin,
            setSwapCoin,
            setHolding
        }}>
            {children}
        </BalanceContext.Provider>
    )
}

const useBalanceContext = (): BalanceContextType => useContext(BalanceContext)

export {
    BalanceContextProvider,
    useBalanceContext
}

