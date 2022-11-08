/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, FC, ReactNode, useContext, useState } from "react"
import { COINS } from "../../constants/coins"
import { CriptoBalance, Currencies } from "../../types"
import { BalanceContext as BalanceContextType } from "./types"

const contextDefaultValues: BalanceContextType = {
    balance: '0',
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
    polkadot: {
        id: 'dot',
        name: 'Polkadot',
        ticker: 'DOT',
        balance: '0',
        currency: 'DOT'
    },
    binance: {
        id: 'bnb',
        name: 'Binance Coin',
        ticker: 'BNB',
        balance: '0',
        currency: 'BNB'
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
    setBinance: () => ({
        id: 'bnb',
        name: 'Binance Coin',
        ticker: 'BNB',
        balance: '0',
        currency: 'BNB'
    }),
    setPolkadot: () => ({
        id: 'dot',
        name: 'Polkadot',
        ticker: 'DOT',
        balance: '0',
        currency: 'DOT'
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
    setSwapCoin: () => undefined,
    conversion: '0',
    setConversion: () => '0'
}

type Props = {
    children: ReactNode
}

const BalanceContext = createContext<BalanceContextType>(contextDefaultValues)

const BalanceContextProvider: FC<Props> = ({ children }) => {
    const [currency, setCurrency] = useState<Currencies>('USD')

    const [balance, setBalance] = useState<string>('10,000')

    const [chosenCoin, setChosenCoin] = useState<CriptoBalance|undefined>(undefined)

    const [swapCoin, setSwapCoin] = useState<string>('')

    const [bitcoin, setBitcoin] = useState({
        id: COINS.BITCOIN,
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: '0,00246941',
        currency: 'BTC'
    })

    const [binance, setBinance] = useState({
        id: COINS.BINANCE,
        name: 'Binance Coin',
        ticker: 'BNB',
        balance: '0,03089592',
        currency: 'BNB'
    })

    const [polkadot, setPolkadot] = useState({
        id: COINS.POLKADOT,
        name: 'Polkadot',
        ticker: 'DOT',
        balance: '4,87638999',
        currency: 'DOT'
    })

    const [ethereum, setEthereum] = useState({
        id: COINS.ETHEREUM,
        name: 'Ethereum',
        ticker: 'ETH',
        balance: '0,09168927',
        currency: 'ETH'
    })

    const holding = [bitcoin, binance, polkadot, ethereum]

    const [conversion, setConversion] = useState<string>('0')

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
            binance,
            setBinance,
            polkadot,
            setPolkadot,
            ethereum,
            setEthereum,
            holding,
            swapCoin,
            setSwapCoin,
            conversion,
            setConversion
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

