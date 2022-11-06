import { COINS } from "../constants/coins"
import { CURRENCIES } from "../constants/currency"

export type Coins = typeof COINS[keyof typeof COINS]

export type Currencies = typeof CURRENCIES[keyof typeof CURRENCIES]

export type CriptoInfo = {
    [key: string]: {
        usd: number,
        usd_24h_vol: number
        usd_24h_change: number
    }
}

export type CriptoBalance = {
    id: Coins
    name: string
    ticker: string
    balance: string
    currency: string
}

export type RootStackParamList = {
    Home: undefined
    Swap: undefined
    Confirmation: undefined
    Result: undefined
}