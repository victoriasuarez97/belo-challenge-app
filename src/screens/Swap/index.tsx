import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { Container, SwapCoins } from "../../components"
import { RootStackParamList } from "../../types"

type Props = {
    navigation: NativeStackScreenProps<RootStackParamList, 'Swap'>['navigation']
}

const Swap: FC<Props> = ({ navigation }) => {
    return (
        <Container goBack navigation={navigation}>
            <SwapCoins navigation={navigation}/>
        </Container>
    )
}

export default Swap  