import { CURRENCIES } from "../constants/currency"
import { CriptoBalance, Currencies } from "../types"

export const formatCurrency = (value: number | string, currency: Currencies): string => {
    return `${value} ${CURRENCIES[currency]}`
}

export const removeSelectedCoinFromHolding = (id: string, holdings: CriptoBalance[]): CriptoBalance[] => (
    holdings.filter((holding) => holding.id !== id)
)
