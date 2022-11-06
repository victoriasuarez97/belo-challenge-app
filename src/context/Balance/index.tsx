/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, FC, ReactNode, useContext, useState } from "react"
import { COINS } from "../../constants/coins"
import { CriptoBalance, Currencies } from "../../types"
import { BalanceContext as BalanceContextType } from "./types"

const contextDefaultValues: BalanceContextType = {
    balance: 0,
    setBalance: () => {},
    currency: 'USD',
    setCurrency: () => {},
    chosenCoin: undefined,
    setChosenCoin: () => {},
    bitcoin: {
        id: 'bitcoin',
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: '0',
        currency: 'BTC'
    },
    tether: {
        id: 'tether',
        name: 'Tether',
        ticker: 'USDT',
        balance: '0',
        currency: 'USDT'
    },
    dai: {
        id: 'dai',
        name: 'Dai',
        ticker: 'DAI',
        balance: '0',
        currency: 'DAI'
    },
    ethereum: {
        id: 'ethereum',
        name: 'Ethereum',
        ticker: 'ETH',
        balance: '0',
        currency: 'ETH'
    },
    setBitcoin: () => ({
        id: 'bitcoin',
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: '0',
        currency: 'BTC'
    }),
    setDai: () => ({
        id: 'dai',
        name: 'Dai',
        ticker: 'DAI',
        balance: '0',
        currency: 'DAI'
    }),
    setTether: () => ({
        id: 'tether',
        name: 'Tether',
        ticker: 'USDT',
        balance: '0',
        currency: 'USDT'
    }),
    setEthereum: () => ({
        id: 'ethereum',
        name: 'Ethereum',
        ticker: 'ETH',
        balance: '0',
        currency: 'ETH'
    }),
    holding: [],
    swapCoin: undefined,
    setSwapCoin: () => ({
        id: '',
        name: '',
        ticker: '',
        balance: '',
        currency: ''
    })
}

type Props = {
    children: ReactNode
}

const BalanceContext = createContext<BalanceContextType>(contextDefaultValues)

const BalanceContextProvider: FC<Props> = ({ children }) => {
    const [currency, setCurrency] = useState<Currencies>('USD')

    const [balance, setBalance] = useState<number>(10000)

    const [chosenCoin, setChosenCoin] = useState<CriptoBalance|undefined>(undefined)

    const [swapCoin, setSwapCoin] = useState<CriptoBalance>({
        id: '',
        name: '',
        ticker: '',
        balance: '',
        currency: ''
    })

    const [bitcoin, setBitcoin] = useState({
        id: COINS.BITCOIN,
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: '0,0010239',
        currency: 'BTC'
    })

    const [dai, setDai] = useState({
        id: COINS.DAI,
        name: 'Dai',
        ticker: 'DAI',
        balance: '100,56',
        currency: 'DAI'
    })

    const [tether, setTether] = useState({
        id: COINS.TETHER,
        name: 'Tether',
        ticker: 'USDT',
        balance: '09,56',
        currency: 'USDT'
    })

    const [ethereum, setEthereum] = useState({
        id: COINS.ETHEREUM,
        name: 'Ethereum',
        ticker: 'ETH',
        balance: '000100,56',
        currency: 'ETH'
    })

    const holding = [bitcoin, dai, tether, ethereum]

    return(
        <BalanceContext.Provider value={{
            balance,
            setBalance,
            currency,
            setCurrency,
            chosenCoin,
            setChosenCoin,
            bitcoin,
            setBitcoin,
            dai,
            setDai,
            tether,
            setTether,
            ethereum,
            setEthereum,
            holding,
            swapCoin,
            setSwapCoin
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

