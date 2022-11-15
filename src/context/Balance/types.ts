import { Dispatch, SetStateAction } from "react"
import { CriptoBalance } from "../../types"

export type BalanceContext = {
    fromCoin: CriptoBalance
    setFromCoin: Dispatch<SetStateAction<CriptoBalance | undefined>>
    holding: CriptoBalance[]
    setHolding: Dispatch<SetStateAction<CriptoBalance[]>>
    amount: string
    setAmount: Dispatch<SetStateAction<string>>
    conversion: number
    setConversion: Dispatch<SetStateAction<number>>
    toCoin: CriptoBalance | undefined
    setToCoin: Dispatch<SetStateAction<CriptoBalance | undefined>>
}