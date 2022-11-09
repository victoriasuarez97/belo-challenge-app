import { Button, Divider } from "@ui-kitten/components";
import React, { FC } from "react";
import { Text, View } from "react-native";
import { Container } from "../../components";
import { useBalanceContext } from "../../context";
import { CriptoBalance } from "../../types";
import { tw } from "../../utils/tailwind";

type Props = {
    navigation
    coin: CriptoBalance
}

const Confirmation:FC<Props>= ({ navigation }) => {

    const { chosenCoin, amount, conversion, swapCoin } = useBalanceContext()

    return (
        <Container navigation={navigation} goBack>
            <Text style={tw`text-3xl font-bold text-white text-center`}>Confirm swap</Text>
            <Text style={tw`pt-5 text-lg text-white`}>You will swap</Text>
            <View style={tw`flex flex-row justify-between`}>
                <Text style={tw`pt-3 text-xl font-bold text-white`}>{chosenCoin.name}</Text>
                <Text style={tw`pt-3 text-xl font-bold text-white`}>{`${amount}${chosenCoin.currency}`}</Text>
            </View>
            <Divider style={tw`my-5`}/>
            <Text style={tw`text-xl text-white`}>For</Text>
            <View style={tw`flex flex-row justify-between`}>
                <Text style={tw`pt-3 text-xl font-bold text-white`}>{swapCoin.name}</Text>
                <Text style={tw`pt-3 text-xl font-bold text-white`}>{`${conversion}${swapCoin.currency}`}</Text>
            </View>
            <Button style={tw`my-10`}>CONFIRM</Button>
        </Container>
    )
}

export default Confirmation