import { UseBaseQueryResult } from "react-query"
import { CriptoBalance, CoinInfo } from "../../../../types"

type Props = {
    coin: CriptoBalance
    selectedCoin: CriptoBalance
    coinInfo: CoinInfo
    isLoading: UseBaseQueryResult['isLoading']
}

export type CriptoCardType = (props: Props) => JSX.Element
