import { CriptoBalance, Currencies } from "../types"

export const formatCurrency = (value: number, decimals: number, currency: Currencies): string => (
    `${value.toFixed(decimals)} ${currency}`
)

export const removeSelectedCoinFromHolding = (id: string, holdings: CriptoBalance[]): CriptoBalance[] => (
    holdings.filter((holding) => holding.id !== id)
)

export const getCriptoBalanceInARS = (criptoBalance: number, ars: number): number => {
    const multiplic = criptoBalance * ars
    return multiplic
}

export const getTotalBalanceInARS = (holding: CriptoBalance[]): number => (
    holding.map((coin) => coin.ars).reduce((a, b) => a + b, 0)
)

export const getTotalBalance = (holding: CriptoBalance[], dollarBlue: number): number => {
    const arsBalance = getTotalBalanceInARS(holding)
    return arsBalance / dollarBlue
}

export const findCoinByName = (name: string, holdings: CriptoBalance[]): CriptoBalance => (
    holdings.find((holding) => holding.name === name)
)

export const getConversion = (amount: string, coinValue: number): string => {
    const estimatedAmount = parseFloat(amount) * coinValue
    return estimatedAmount.toFixed(8)
}

export const updateHolding = (holding: CriptoBalance[], coin: CriptoBalance, updatedBalance: number): CriptoBalance[] => {
    const makeUpdate = holding.map((tenure) => (tenure === coin
        ? { ...tenure, balance: updatedBalance }
        : tenure
    ))

    return makeUpdate
}


export const substractionBalance = (coinBalance: number, amountInvested: number): number => {
    const substraction = coinBalance - amountInvested
    return substraction
}


export const addBalance = (amountInvested: number, coinBalance: number): number => {
    const suma = amountInvested + coinBalance
    return suma
}
