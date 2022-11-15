import { Button, Divider } from "@ui-kitten/components";
import React, { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Container } from "../../components";
import { VIEWS } from "../../constants/common";
import { useBalanceContext } from "../../context";
import { CriptoBalance } from "../../types";
import { addBalance, substractionBalance, updateHolding } from "../../utils";
import { tw } from "../../utils/tailwind";

type Props = {
    navigation
    coin: CriptoBalance
}

const Confirmation:FC<Props>= ({ navigation }) => {
    const [confirm, setConfirm] = useState(false)
    const { fromCoin, amount, conversion, toCoin, setHolding, holding } = useBalanceContext()

    const swap = (): void => {
        setConfirm(true)
        navigation.navigate(VIEWS.RESULT)
    }

    useEffect(() => {
        if (confirm) {
            const remainingBalance = substractionBalance(fromCoin.balance, parseFloat(amount))
            const updatedBalance = addBalance(conversion, toCoin.balance)

            setHolding(updateHolding(holding, fromCoin, remainingBalance, toCoin, updatedBalance))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [confirm])

    return (
        <Container navigation={navigation} goBack>
            <Text style={tw`text-3xl font-bold text-white text-center`}>Confirm swap</Text>
            <Text style={tw`pt-5 text-lg text-white`}>You will swap</Text>
            <View style={tw`flex flex-row justify-between`}>
                <Text style={tw`pt-3 text-xl font-bold text-white`}>{fromCoin.name}</Text>
                <Text style={tw`pt-3 text-xl font-bold text-white`}>{`${amount}${fromCoin.currency}`}</Text>
            </View>
            <Divider style={tw`my-5`}/>
            <Text style={tw`text-lg text-white`}>For</Text>
            <View style={tw`flex flex-row justify-between`}>
                <Text style={tw`pt-3 text-xl font-bold text-white`}>{toCoin.name}</Text>
                <Text style={tw`pt-3 text-xl font-bold text-white`}>{`${conversion}${toCoin.currency}`}</Text>
            </View>
            <Button style={tw`my-10`} onPress={swap}>
                CONFIRM
            </Button>
        </Container>
    )
}

export default Confirmation