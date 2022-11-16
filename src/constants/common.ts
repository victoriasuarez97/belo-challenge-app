import { COINS } from "./coins"

export const VIEWS = {
    HOME: 'Home',
    SWAP: 'Swap',
    CONFIRMATION: 'Confirmation',
    RESULT: 'Result'
}

export const DEFAULT_COIN_VALUES = {
    id: '',
    image: '../../assets/bitcoin.png',
    name: '',
    ticker: '',
    balance: 0,
    currency: '',
    ars: 0
}

export const HOLDINGS = [
    {
        id: COINS.BITCOIN,
        image: '../assets/bitcoin.png',
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.00046941,
        currency: 'BTC',
        ars: undefined
    },
    {
        id: COINS.BINANCE,
        image: '../assets/binance.png',
        name: 'Binance Coin',
        ticker: 'BNB',
        balance: 0.03089592,
        currency: 'BNB',
        ars: undefined
    },
    {
        id: COINS.POLKADOT,
        image: '../assets/polkadot.png',
        name: 'Polkadot',
        ticker: 'DOT',
        balance: 4.87638999,
        currency: 'DOT',
        ars: undefined
    },
    {
        id: COINS.ETHEREUM,
        image: '../assets/ethereum.png',
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 0.09168927,
        currency: 'ETH',
        ars: undefined
    }
]