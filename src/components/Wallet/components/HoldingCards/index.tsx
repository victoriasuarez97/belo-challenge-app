import { Spinner } from "@ui-kitten/components";
import React, { FC } from "react";
import { Pressable, Text, View } from "react-native";
import { VIEWS } from "../../../../constants/common";
import { CURRENCIES } from "../../../../constants/currency";
import { useBalanceContext } from "../../../../context";
import { useCriptoInARSQuery } from "../../../../hooks";
import { CriptoBalance } from "../../../../types";
import { formatCurrency } from "../../../../utils";
import { tw } from "../../../../utils/tailwind";

type Props = {
    navigation
}

const HoldingCards: FC<Props> = ({ navigation }) => {
    const { holding, setChosenCoin } = useBalanceContext()

    const { isLoading } = useCriptoInARSQuery()

    const chooseCoin = (coin: CriptoBalance): void => {
        navigation.navigate(VIEWS.SWAP)
        setChosenCoin(coin)
    }

    return (
        <>
            {
                holding.map((coin) => (
                    <Pressable
                        onPress={() => chooseCoin(coin)}
                        key={coin.id}
                    >
                        <View style={tw`mt-3 mb-3 p-5 bg-indigo-800 rounded-lg flex flex-row justify-between`}>
                            <View style={tw`flex flex-row items-center justify-around`}>
                                <View>
                                    <Text style={tw`text-lg font-bold text-white`}>{coin.name}</Text>
                                    <Text style={tw`text-lg text-white`}>{coin.ticker}</Text>
                                </View>
                            </View>
                            <View>
                            <Text style={tw`text-lg font-bold text-white text-right text-green-500`}>
                                    {`${coin.balance} ${coin.currency}`}
                                </Text>
                                 <Text style={tw`text-lg text-white text-right`}>
                                    {isLoading ? <Spinner/> : `${formatCurrency(coin.ars, 2, CURRENCIES.ARS)}`}
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