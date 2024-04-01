import { UseBaseQueryResult } from "react-query"
import { Dollar } from "../../types"

type Props = {
	isLoading: UseBaseQueryResult['isLoading']
}

export type HeaderType = (props: Props) => JSX.Element

/* Service */

export type GetDollarBluePrice = () => Promise<Dollar>

/* Hook */

type Params = {
    ARSPriceIsLoading: UseBaseQueryResult['isLoading']
}

type Return = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
    balance: number
}

export type UseDollarBlueQuery = (params: Params) => Return
