import { Dispatch, SetStateAction } from "react"
import { CriptoBalance } from "../../types"

export type BalanceContext = {
    balance: number
    setBalance: Dispatch<SetStateAction<number>>
    chosenCoin?: CriptoBalance
    setChosenCoin: Dispatch<SetStateAction<CriptoBalance | undefined>>
    holding: CriptoBalance[]
    setHolding: Dispatch<SetStateAction<CriptoBalance[]>>
    amount: string
    setAmount: Dispatch<SetStateAction<string>>
    conversion: number
    setConversion: Dispatch<SetStateAction<number>>
    swapCoin: CriptoBalance | undefined
    setSwapCoin: Dispatch<SetStateAction<CriptoBalance | undefined>>
}