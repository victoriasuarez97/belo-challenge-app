import { Dispatch, SetStateAction } from "react"
import { CriptoBalance, Currencies } from "../../types"

export type BalanceContext = {
    balance: string
    setBalance: Dispatch<SetStateAction<string>>
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
    amount: string
    setAmount: Dispatch<SetStateAction<string>>
    conversion: string
    setConversion: Dispatch<SetStateAction<string>>
    swapCoin: CriptoBalance | undefined
    setSwapCoin: Dispatch<SetStateAction<CriptoBalance | undefined>>
}