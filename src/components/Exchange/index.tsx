import React, { FC } from "react";
import { Text, View } from 'react-native';
import { CriptoBalance } from "../../types";
import { tw } from "../../utils/tailwind";
import { CriptoCard } from "./components";
import { useCriptoPricesQuery } from "./hooks";

type Props = {
    coin: CriptoBalance
}

const Exchange:FC<Props> = ({ coin }) => {
    const { coinInfo, isError, isLoading } = useCriptoPricesQuery({ id: coin.id})

    if (isError) return <View><Text>Ups, algo salió mal :(</Text></View>
    if (isLoading) return <View><Text>Cargando...</Text></View>
    
    return (
        <View>
            <CriptoCard isLoading={isLoading} coin={coin} coinInfo={coinInfo}/>
            <View>
                <Text style={tw`text-lg font-bold text-white`}>Your Holding + coins</Text>
            </View>
        </View>
    )
}

export default Exchange