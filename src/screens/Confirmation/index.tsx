import { Button, Divider } from "@ui-kitten/components";
import React, { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Card, Container } from "../../components";
import { VIEWS } from "../../constants/common";
import { useBalanceContext } from "../../context";
import { CriptoBalance } from "../../types";
import { addBalance, formatCurrency, substractionBalance, updateHolding } from "../../utils";
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
            <View style={tw`p-2`}>
                <Text style={tw`py-5 text-2xl font-bold text-white text-left`}>
                    Confirm swap
                </Text>
                <Card>
                    <Text style={tw`text-base text-indigo-400`}>You will swap</Text>
                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`pt-3 text-xl font-bold text-white`}>{fromCoin.name}</Text>
                        <Text style={tw`pt-3 text-xl font-bold text-white`}>{formatCurrency(parseFloat(amount), 8, fromCoin.currency)}</Text>
                    </View>
                    <Divider style={tw`my-5 bg-white`}/>
                    <Text style={tw`text-base text-indigo-400`}>For</Text>
                    <View style={tw`flex flex-row justify-between`}>
                        <Text style={tw`pt-3 text-xl font-bold text-white`}>{toCoin.name}</Text>
                        <Text style={tw`pt-3 text-xl font-bold text-white`}>{formatCurrency(conversion, 8, toCoin.currency)}</Text>
                    </View>
                </Card>
                <Button onPress={swap}>
                    CONFIRM
                </Button>
            </View>
        </Container>
    )
}

export default Confirmation