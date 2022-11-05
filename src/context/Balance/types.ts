import { Dispatch, SetStateAction } from "react"
import { Coins, Currencies } from "../../types"

export type BalanceContext = {
    balance: number
    setBalance: Dispatch<SetStateAction<number>>
    currency: Currencies
    setCurrency: Dispatch<SetStateAction<Currencies>>
    chosenCoin?: Coins
    setChosenCoin: Dispatch<SetStateAction<Coins | undefined>>
}