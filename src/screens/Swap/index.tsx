import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { Container, Exchange } from "../../components"
import { useBalanceContext } from "../../context"
import { RootStackParamList } from "../../types"

type Props = {
    navigation: NativeStackScreenProps<RootStackParamList, 'Swap'>;
}

const Swap: FC<Props> = ({ navigation }) => {
    const { chosenCoin } = useBalanceContext()

    return (
        <Container goBack navigation={navigation}>
            <Exchange coin={chosenCoin}/>
        </Container>
    )
}

export default Swap  