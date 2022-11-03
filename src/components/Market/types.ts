import { CURRENCIES } from "../../types"

export type MarketCardsProps = {
    id: string
    name: string
    price: string
    currency: CURRENCIES
    ticker: string
    variation: string
}