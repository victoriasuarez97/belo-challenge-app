import { Dispatch, SetStateAction } from "react"
import { CriptoBalance, Currencies } from "../../types"

export type BalanceContext = {
    balance: number
    setBalance: Dispatch<SetStateAction<number>>
    currency: Currencies
    setCurrency: Dispatch<SetStateAction<Currencies>>
    chosenCoin?: CriptoBalance
    setChosenCoin: Dispatch<SetStateAction<CriptoBalance | undefined>>
    bitcoin: CriptoBalance
    dai: CriptoBalance
    tether: CriptoBalance
    ethereum: CriptoBalance
    setBitcoin: Dispatch<SetStateAction<CriptoBalance>>
    setDai: Dispatch<SetStateAction<CriptoBalance>>
    setTether: Dispatch<SetStateAction<CriptoBalance>>
    setEthereum: Dispatch<SetStateAction<CriptoBalance>>
    holding: CriptoBalance[]
    swapCoin: CriptoBalance | undefined
    setSwapCoin: Dispatch<SetStateAction<CriptoBalance | undefined>>
}