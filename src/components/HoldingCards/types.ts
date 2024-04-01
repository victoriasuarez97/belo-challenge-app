import { UseBaseQueryResult } from "react-query"

type Props = {
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
}

export type HoldingCardsType = (props: Props) => JSX.Element
