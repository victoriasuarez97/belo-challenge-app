import { CURRENCIES_SYMBOL } from "../constants/currency"
import { Currencies } from "../types"

export const formatCurrency = (value: number, currency: Currencies): string => {
    const formattedNumber = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    return `${CURRENCIES_SYMBOL[currency]}${formattedNumber}`
}