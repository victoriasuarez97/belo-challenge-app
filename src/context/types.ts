import { Dispatch, SetStateAction } from "react"
import { Currencies } from "../types"

export type BalanceContext = {
    balance: number
    setBalance: Dispatch<SetStateAction<number>>
    currency: Currencies
    setCurrency: Dispatch<SetStateAction<Currencies>>
}