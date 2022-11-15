/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, FC, ReactNode, useContext, useState } from "react"
import { HOLDINGS } from "../../constants/common"
import { CriptoBalance } from "../../types"
import { BalanceContext as BalanceContextType } from "./types"

const contextDefaultValues: BalanceContextType = {
    fromCoin: {
        id: '',
        name: '',
        ticker: '',
        balance: 0,
        currency: '',
        ars: 0 
    },
    setFromCoin: () => ({
        id: '',
        name: '',
        ticker: '',
        balance: 0,
        currency: '',
        ars: 0
    }),
    holding: [],
    setHolding: () => [],
    conversion: 0,
    setConversion: () => 0,
    amount: '0',
    setAmount: () => '0',
    toCoin: {
        id: '',
        name: '',
        ticker: '',
        balance: 0,
        currency: '',
        ars: 0 
    },
    setToCoin: () => ({
        id: '',
        name: '',
        ticker: '',
        balance: 0,
        currency: '',
        ars: 0
    })
}

type Props = {
    children: ReactNode
}

const BalanceContext = createContext<BalanceContextType>(contextDefaultValues)

const BalanceContextProvider: FC<Props> = ({ children }) => {
    const [fromCoin, setFromCoin] = useState<CriptoBalance|undefined>({
        id: '',
        name: '',
        ticker: '',
        balance: 0,
        currency: '',
        ars: 0
    })

    const [toCoin, setToCoin] = useState<CriptoBalance>({
        id: '',
        name: '',
        ticker: '',
        balance: 0,
        currency: '',
        ars: 0
    })

    const [amount, setAmount] = useState<string>('0')

    const [holding, setHolding] = useState(HOLDINGS)

    const [conversion, setConversion] = useState<number>(0)

    return(
        <BalanceContext.Provider value={{
            fromCoin,
            setFromCoin,
            holding,
            conversion,
            setConversion,
            amount,
            setAmount,
            toCoin,
            setToCoin,
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

