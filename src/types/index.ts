export type Coins = 'bitcoin' | 'ethereum' | 'dai' | 'tether'

export type Currencies = 'ARS' | 'USD'

export type CriptoInfo = {
    [key: string]: {
        usd: number,
        usd_24h_vol: number
    }
}