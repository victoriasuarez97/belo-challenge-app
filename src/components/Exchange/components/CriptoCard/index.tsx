import React, { FC } from "react"
import { Text, View } from "react-native"
import { UseBaseQueryResult } from "react-query"
import { useBalanceContext } from "../../../../context/Balance"
import { CriptoBalance, CriptoInfo } from "../../../../types"
import { formatCurrency } from "../../../../utils"
import { tw } from "../../../../utils/tailwind"

type Props = {
    coin: CriptoBalance
    coinInfo: CriptoInfo
    isLoading: UseBaseQueryResult['isLoading']
}

const CriptoCard: FC<Props> = ({ coin, coinInfo, isLoading }) => {
    const { currency } = useBalanceContext()

    if (isLoading) return <Text style={tw`text-white`}>...Cargando</Text>

    return  (
        <View style={tw`flex justify-between mt-3 mb-3 p-5 rounded-lg bg-indigo-900`} >
            <Text style={tw`text-lg font-bold text-white`}>{coin.name.toUpperCase()}</Text>
            <Text style={tw`pt-2 font-bold text-white`}>Price</Text>
            <Text style={tw`text-white`}>{formatCurrency(coinInfo[coin.id]?.usd, currency)}</Text>
            <Text style={tw`pt-2 font-bold text-white`}>24h Volume</Text>
            <Text style={tw`text-white`}>{formatCurrency(coinInfo[coin.id]?.usd_24h_vol, currency)}</Text>
            <Text style={tw`pt-2 font-bold text-white`}>24h Change</Text>
            <Text style={tw`text-white`}>{formatCurrency(coinInfo[coin.id]?.usd_24h_change, currency)}</Text>
        </View>
    )
}

export default CriptoCard