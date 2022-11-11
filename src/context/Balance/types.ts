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
    binance: CriptoBalance
    polkadot: CriptoBalance
    ethereum: CriptoBalance
    setBitcoin: Dispatch<SetStateAction<CriptoBalance>>
    setBinance: Dispatch<SetStateAction<CriptoBalance>>
    setPolkadot: Dispatch<SetStateAction<CriptoBalance>>
    setEthereum: Dispatch<SetStateAction<CriptoBalance>>
    holding: CriptoBalance[]
    amount: number
    setAmount: Dispatch<SetStateAction<number>>
    conversion: number
    setConversion: Dispatch<SetStateAction<number>>
    swapCoin: CriptoBalance | undefined
    setSwapCoin: Dispatch<SetStateAction<CriptoBalance | undefined>>
    setHolding: Dispatch<SetStateAction<CriptoBalance[]>>
}