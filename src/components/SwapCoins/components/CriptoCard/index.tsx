import React, { FC } from "react"
import { ActivityIndicator, Text, View } from "react-native"
import { UseBaseQueryResult } from "react-query"
import { CoinInfo, CriptoBalance } from "../../../../types"
import { tw } from "../../../../utils/tailwind"

type Props = {
    coin: CriptoBalance
    selectedCoin: CriptoBalance
    coinInfo: CoinInfo
    isLoading: UseBaseQueryResult['isLoading']
}

const CriptoCard: FC<Props> = ({ coin, selectedCoin, coinInfo, isLoading }) => {
    if (isLoading) return <ActivityIndicator />

    return  (
        <View style={tw`flex justify-between mt-3 mb-3 p-5 rounded-lg bg-indigo-900`} >
            <Text style={tw`text-lg font-bold text-white`}>{selectedCoin.name.toUpperCase()}</Text>
            <Text style={tw`pt-2 font-bold text-white`}>Price</Text>
            <Text style={tw`text-white`}>{`${coinInfo[coin.id][selectedCoin.currency]} ${selectedCoin.currency}`}</Text>
            <Text style={tw`pt-2 font-bold text-white`}>24h Volume</Text>
            <Text style={tw`text-white`}>{`${coinInfo[coin.id][selectedCoin.currency]} ${selectedCoin.currency}`}</Text>
            <Text style={tw`pt-2 font-bold text-white`}>24h Change</Text>
            <Text style={tw`text-white`}>{`${coinInfo[coin.id]?.usd_24h_change} ${selectedCoin.currency}`}</Text>
        </View>
    )
}

export default CriptoCard