import React, { FC } from "react"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Container, SwapCoins } from "../../components"
import { RootStackParamList } from "../../types"

const Swap: FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    return (
        <Container goBack navigation={navigation}>
            <SwapCoins />
        </Container>
    )
}

export default Swap  