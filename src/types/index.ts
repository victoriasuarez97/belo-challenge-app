import { COINS } from "../constants/coins"

export type Coins = typeof COINS[keyof typeof COINS]

export type Currencies = 'ARS' | 'USD'

export type CriptoInfo = {
    [key: string]: {
        usd: number,
        usd_24h_vol: number
    }
}