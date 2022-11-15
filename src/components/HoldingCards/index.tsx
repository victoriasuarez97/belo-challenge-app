import { Spinner } from "@ui-kitten/components";
import { useAssets } from "expo-asset";
import React, { FC } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { UseBaseQueryResult } from "react-query";
import { VIEWS } from "../../constants/common";
import { CURRENCIES } from "../../constants/currency";
import { useBalanceContext } from "../../context";
import { CriptoBalance } from "../../types";
import { formatCurrency } from "../../utils";
import { tw } from "../../utils/tailwind";
import Error from "../Error";

type Props = {
    navigation
    isLoading: UseBaseQueryResult['isLoading']
    isError: UseBaseQueryResult['isError']
}

const HoldingCards: FC<Props> = ({ navigation, isLoading, isError }) => {
    const { holding, setFromCoin } = useBalanceContext()

    const [assets] = useAssets([
        require('../../assets/bitcoin.png'),
        require('../../assets/binance.png'),
        require('../../assets/polkadot.png'),
        require('../../assets/ethereum.png')
    ]);

    const chooseCoin = (coin: CriptoBalance): void => {
        navigation.navigate(VIEWS.SWAP)
        setFromCoin(coin)
    }

    if (isError) return <Error />

    return (
        <>
            {
                holding.map((coin, i) => (
                    <Pressable
                        onPress={() => chooseCoin(coin)}
                        key={coin.id}
                    >
                        <View style={tw`mt-3 mb-3 py-5 px-3 bg-indigo-800 rounded-lg flex flex-row justify-between items-center`}>
                            <View style={tw`flex flex-row items-center justify-around`}>
                                <View style={tw`flex flex-row items-center`}>
                                    {assets && <Image source={assets[i]} style={tw`w-12 h-12`}/>}
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