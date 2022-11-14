import { COINS } from "../constants/coins"
import { CURRENCIES } from "../constants/currency"

export type Coins = typeof COINS[keyof typeof COINS]

export type Currencies = typeof CURRENCIES[keyof typeof CURRENCIES]

export type CoinInfo = {
    [key: string]: {
        [key: string]: number
    }
}

export type Dollar = {
    blue: number,
}

export type CriptoBalance = {
    id: string
    name: string
    ticker: string
    balance: number
    currency: string
    ars?: number
}

export type RootStackParamList = {
    Home: undefined
    Swap: undefined
    Confirmation: undefined
    Result: undefined
}