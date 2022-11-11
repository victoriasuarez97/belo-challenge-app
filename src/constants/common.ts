import { COINS } from "./coins"

export const VIEWS = {
    HOME: 'Home',
    SWAP: 'Swap',
    CONFIRMATION: 'Confirmation',
    RESULT: 'Result'
}

export const HOLDINGS = [
    {
        id: COINS.BITCOIN,
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.00246941,
        currency: 'BTC'
    },
    {
        id: COINS.BINANCE,
        name: 'Binance Coin',
        ticker: 'BNB',
        balance: 0.03089592,
        currency: 'BNB'
    },
    {
        id: COINS.POLKADOT,
        name: 'Polkadot',
        ticker: 'DOT',
        balance: 4.87638999,
        currency: 'DOT'
    },
    {
        id: COINS.ETHEREUM,
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 0.09168927,
        currency: 'ETH'
    }
]