import { CriptoBalance, Currencies } from "../types"

export const formatCurrency = (value: number, currency: Currencies): string => (
    `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} ${currency}`
)

export const removeSelectedCoinFromHolding = (id: string, holdings: CriptoBalance[]): CriptoBalance[] => (
    holdings.filter((holding) => holding.id !== id)
)

export const findCoinByName = (name: string, holdings: CriptoBalance[]): CriptoBalance => (
    holdings.find((holding) => holding.name === name)
)

export const getConversion = (amount: string, coinValue: number): string => {
    const estimatedAmount = parseFloat(amount) * coinValue
    return estimatedAmount.toFixed(8)
}

export const updateHolding = (holding: CriptoBalance[], coin: CriptoBalance, updatedBalance: number): CriptoBalance[] => (
    holding.map((tenure) => (tenure === coin
        ? { ...tenure, balance: updatedBalance }
        : tenure
    ))
)

export const substractionBalance = (coinBalance: number, amountInvested: number): number => (
    coinBalance - amountInvested
)

export const addBalance = (amountInvested: number, coinBalance: number): number => (
    amountInvested + coinBalance
)
