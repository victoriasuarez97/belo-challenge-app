/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, FC, ReactNode, useContext, useState } from "react"
import { Currencies } from "../types"
import { BalanceContext as BalanceContextType } from "./types"

const contextDefaultValues: BalanceContextType = {
    balance: 0,
    setBalance: () => {},
    currency: 'USD',
    setCurrency: () => {}
}

type Props = {
    children: ReactNode
}

export const BalanceContext = createContext<BalanceContextType>(contextDefaultValues)

export const BalanceContextProvider: FC<Props> = ({ children }) => {
    const [currency, setCurrency] = useState<Currencies>('USD')
    const [balance, setBalance] = useState<number>(10000)

    return(
        <BalanceContext.Provider value={{
            balance,
            setBalance,
            currency,
            setCurrency
        }}>
            {children}
        </BalanceContext.Provider>
    )
}

export const useBalanceContext = (): BalanceContextType => useContext(BalanceContext)