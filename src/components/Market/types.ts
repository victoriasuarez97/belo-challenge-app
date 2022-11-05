export type MarketCardsProps = {
    name: string
    price: number
    currency: string | undefined
    volume: number
}

export type Info = {
    price: number,
    volume: number
}

type Cripto = "bitcoin" | "ethereum" | "dai" | "tether"

export type CriptoMap = { [cripto in Cripto]: Info };
