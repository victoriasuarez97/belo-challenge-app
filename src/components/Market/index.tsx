import React, { FC } from "react";
import { Text, View } from "react-native";
import { tw } from "../../utils/tailwind";
import MarketCards from "./components/Cards";
import { useCriptoPricesQuery } from "./hooks/useCriptoPricesQuery";

const Market: FC = () => {
    const { coins, prices, isError, isLoading } = useCriptoPricesQuery()

    if (isError) return <View><Text>Ups, algo salió mal :(</Text></View>
    if (isLoading) return <View><Text>Cargando...</Text></View>

    return (
        <View style={tw`m-5 p-5 border-amber-500 rounded-lg border-2`}>
            <Text style={tw`text-white font-bold text-xl`}>Market 📈</Text>
            <MarketCards coins={coins} prices={prices} />
        </View>
    )
}

export default Market