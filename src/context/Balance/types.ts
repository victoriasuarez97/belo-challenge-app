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
    swapCoin: string | undefined
    setSwapCoin: Dispatch<SetStateAction<string | undefined>>
    conversion: string
    setConversion: Dispatch<SetStateAction<string>>
}