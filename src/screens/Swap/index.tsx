import { NativeStackScreenProps } from "@react-navigation/native-stack"
import React, { FC } from "react"
import { Container, SwapCoins } from "../../components"
import { useBalanceContext } from "../../context"
import { RootStackParamList } from "../../types"
import { removeSelectedCoinFromHolding } from "../../utils"

type Props = {
    navigation: NativeStackScreenProps<RootStackParamList, 'Swap'>;
}

const Swap: FC<Props> = ({ navigation }) => {
    const { chosenCoin, holding } = useBalanceContext()
    
    const newHoldings = removeSelectedCoinFromHolding(chosenCoin.id, holding)
    
    return (
        <Container goBack navigation={navigation}>
            <SwapCoins coin={chosenCoin} newHolding={newHoldings} navigation={navigation}/>
        </Container>
    )
}

export default Swap  