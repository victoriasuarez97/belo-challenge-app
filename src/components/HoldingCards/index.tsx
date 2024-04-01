import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Spinner } from "@ui-kitten/components";
import { CURRENCIES } from "../../constants/currency";
import { useBalanceContext } from "../../context";
import { CriptoBalance, RootStackParamList } from "../../types";
import { formatCurrency } from "../../utils";
import { tw } from "../../utils/tailwind";
import Error from "../Error";
import { HoldingCardsType } from "./types";

const HoldingCards: HoldingCardsType = ({ isLoading, isError }) => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const { holding, setFromCoin } = useBalanceContext()

    const chooseCoin = (coin: CriptoBalance): void => {
        navigation.navigate('Swap')
        setFromCoin(coin)
    }

    if (isError) return <Error />

    return (
        <>
            {
                holding.map((coin) => (
                    <Pressable
                        onPress={() => chooseCoin(coin)}
                        key={coin.id}
                    >
                        <View style={tw`mt-3 mb-3 py-5 px-3 bg-indigo-800 rounded-lg flex flex-row justify-between items-center`}>
                            <View style={tw`flex flex-row items-center justify-around`}>
                                <View style={tw`flex flex-row items-center`}>
                                    <Image source={coin.image} style={tw`w-12 h-12`}/>
                                    <View style={tw`px-2`}>
                                        <Text style={tw`text-lg font-bold text-white`}>{coin.name}</Text>
                                        <Text style={tw`text-base text-white`}>{coin.ticker}</Text>
                                    </View>
                                </View>
                            </View>
                            <View>
                                <Text style={tw`text-lg font-bold text-white text-right text-green-500`}>
                                    {formatCurrency(coin.balance, 8, coin.currency)}
                                </Text>
                                <Text style={tw`text-base text-white text-right`}>
                                    {isLoading ? <Spinner/> : formatCurrency(coin.ars, 2, CURRENCIES.ARS)}
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                ))
            }
        </>
    )
}

export default HoldingCards
