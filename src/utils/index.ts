import { CURRENCIES } from "../constants/currency"
import { CriptoBalance, Currencies } from "../types"

export const formatCurrency = (value: number | string, currency: Currencies): string => {
    return `${value} ${CURRENCIES[currency]}`
}

export const removeSelectedCoinFromHolding = (id: string, holdings: CriptoBalance[]): CriptoBalance[] => (
    holdings.filter((holding) => holding.id !== id)
)

export const findCoinByName = (name: string, holdings: CriptoBalance[]): CriptoBalance => (
    holdings.find((holding) => holding.name === name)
)

export const getConversion = (amount: string, coinValue: number): string => {
    const estimatedAmount = parseFloat(amount) * coinValue
    const fixDecimals = estimatedAmount.toFixed(8)
    const formattedAmount = fixDecimals.toString().replace('.', ',')
    return formattedAmount
}