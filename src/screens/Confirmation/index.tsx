import React, { FC, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Divider } from "@ui-kitten/components";
import { Card, Container } from "../../components";
import { DEFAULT_COIN_VALUES } from "../../constants/common";
import { useBalanceContext } from "../../context";
import { RootStackParamList } from "../../types";
import { addBalance, formatCurrency, substractionBalance, updateHolding } from "../../utils";
import { tw } from "../../utils/tailwind";

const Confirmation:FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
    const [confirm, setConfirm] = useState(false)
    const { fromCoin, amount, conversion, toCoin, setHolding, holding, setAmount, setFromCoin, setToCoin, setConversion } = useBalanceContext()

    const swap = (): void => {
        setConfirm(true)
        navigation.navigate('Result')
    }

    useEffect(() => {
        if (confirm) {
            const remainingBalance = substractionBalance(fromCoin.balance, parseFloat(amount))
            const updatedBalance = addBalance(conversion, toCoin.balance)

            setHolding(updateHolding(holding, fromCoin, remainingBalance, toCoin, updatedBalance))
            setAmount('0')
            setFromCoin(DEFAULT_COIN_VALUES)
            setToCoin(DEFAULT_COIN_VALUES)
            setConversion(0)
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