import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

export type CardType = (props: Props) => JSX.Element
