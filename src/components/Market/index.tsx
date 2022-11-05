import React, { FC } from "react";
import { Text, View } from "react-native";
import { formatCurrency } from "../../utils";
import { tw } from "../../utils/tailwind";
import { useCriptoPricesQuery } from "./hooks/useCriptoPricesQuery";

const Market: FC = () => {
    const { coins, prices, isError, isLoading } = useCriptoPricesQuery()

    if (isError) return <View><Text>Ups, algo salió mal :(</Text></View>
    if (isLoading) return <View><Text>Cargando...</Text></View>

    return (
        <View style={tw`m-5 p-5 border-amber-500 rounded-lg border-2`}>
            <Text style={tw`text-white font-bold text-xl`}>Market 📈</Text>                
                {
                    coins.map(coin => {
                        return (
                            <View style={tw`flex justify-between mt-3 mb-3 p-5 rounded-lg bg-teal-500`} key={coin}>
                                <Text style={tw`text-lg font-bold text-white`}>{coin.toUpperCase()}</Text>
                                {
                                    prices.map(price => (
                                        <View key={price[coin].usd}>
                                            <Text style={tw`pt-2 font-bold text-white`}>Price</Text>
                                            <Text style={tw`font-bold text-white`}>{formatCurrency(price[coin].usd)}</Text>
                                            <Text style={tw`pt-2 font-bold text-white`}>24h Volume</Text>
                                            <Text style={tw`font-bold text-white`}>{formatCurrency(price[coin].usd_24h_vol)}</Text>
                                        </View>
                                    ))
                                }
                            </View>)
                    }) 
                }
        </View>
    )
}

export default Market