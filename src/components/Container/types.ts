import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { ReactNode } from "react"
import { RootStackParamList } from "../../types"

type Props = {
    children: ReactNode
    goBack?: boolean
    navigation?: NativeStackNavigationProp<RootStackParamList>
}

export type ContainerType = (props: Props) => JSX.Element
