import { CURRENCIES } from "../constants/currency"
import { Currencies } from "../types"

export const formatCurrency = (value: number | string, currency: Currencies): string => {
    const formattedNumber = value ? value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") : ''
    return `${formattedNumber} ${CURRENCIES[currency]}`
}