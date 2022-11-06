import React, { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { useBalanceContext } from "../../../../context";
import { formatCurrency } from "../../../../utils";
import { tw } from "../../../../utils/tailwind";

type Props = {
    navigation
}

const HoldingCards: FC<Props> = ({ navigation }) => {
    const { holding, setChosenCoin } = useBalanceContext()

    return (
        <>
            {
                holding.map((coin) => (
                    <Pressable onPress={() => { navigation.navigate('Swap'); setChosenCoin(coin)}} key={coin.id}>
                        <View style={tw`mt-3 mb-3 p-5 flex flex-row justify-between rounded-lg bg-indigo-900`}>
                            <View style={tw`flex flex-row items-center justify-around`}>
                                <Text style={tw`pr-3`}>👁</Text>
                                <View>
                                    <Text style={tw`text-lg font-bold text-white`}>{coin.name}</Text>
                                    <Text style={tw`text-lg text-white`}>{coin.ticker}</Text>
                                </View>
                            </View>
                            <View>
                                <Text style={tw`text-lg font-bold text-white`}>{formatCurrency(coin.balance, coin.currency)}</Text>
                            </View>
                        </View>
                    </Pressable>
                ))
            }
        </>

    )
}

export default HoldingCards