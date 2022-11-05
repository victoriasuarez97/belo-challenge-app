/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, FC, ReactNode, useContext, useState } from "react"
import { Coins, Currencies } from "../../types"
import { BalanceContext as BalanceContextType } from "./types"

const contextDefaultValues: BalanceContextType = {
    balance: 0,
    setBalance: () => {},
    currency: 'USD',
    setCurrency: () => {},
    chosenCoin: 'bitcoin',
    setChosenCoin: () => {}
}

type Props = {
    children: ReactNode
}

const BalanceContext = createContext<BalanceContextType>(contextDefaultValues)

const BalanceContextProvider: FC<Props> = ({ children }) => {
    const [currency, setCurrency] = useState<Currencies>('USD')
    const [balance, setBalance] = useState<number>(10000)
    const [chosenCoin, setChosenCoin] = useState<Coins|undefined>(undefined)

    return(
        <BalanceContext.Provider value={{
            balance,
            setBalance,
            currency,
            setCurrency,
            chosenCoin,
            setChosenCoin
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

