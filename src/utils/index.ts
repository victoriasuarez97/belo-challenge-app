import { CriptoBalance, Currencies } from "../types"

export const formatCurrency = (value: number, decimals: number, currency: Currencies): string => (
    `${value.toFixed(decimals)} ${currency}`
)

export const removeSelectedCoinFromHolding = (id: string, holdings: CriptoBalance[]): CriptoBalance[] => (
    holdings.filter((holding) => holding.id !== id)
)

export const getCriptoBalanceInARS = (criptoBalance: number, ars: number): number => (
    criptoBalance * ars
)

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

export const substractionBalance = (coinBalance: number, amountInvested: number): number => (
    coinBalance - amountInvested
)

export const addBalance = (amountInvested: number, coinBalance: number): number => (
    amountInvested + coinBalance
)

export const updateHolding = (
    holding: CriptoBalance[],
    fromCoin: CriptoBalance,
    updatedFromBalance: number,
    toCoin: CriptoBalance,
    updatedToBalance: number,): CriptoBalance[] => (
    holding.map((tenure) => {
        if (tenure === fromCoin) {
            const updatedCoin = { ...tenure, balance: updatedFromBalance }
            return updatedCoin
        } else if (tenure === toCoin) {
            const updatedCoin = { ...tenure, balance: updatedToBalance }
            return updatedCoin
        } else {
            return tenure
        }
    })
)
