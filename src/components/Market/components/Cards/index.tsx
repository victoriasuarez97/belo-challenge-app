import React, { FC } from "react"
import { Pressable, Text, View } from "react-native"
import { useBalanceContext } from "../../../../context/BalanceContext"
import { Coins, CriptoInfo } from "../../../../types"
import { formatCurrency } from "../../../../utils"
import { tw } from "../../../../utils/tailwind"

type Props = {
    coins: Coins[] | string[]
    prices: CriptoInfo[] 
}

const MarketCards: FC<Props> = ({ coins, prices }) => {
    const { currency } = useBalanceContext()
    
    return (
        <Pressable onPress={() => console.log('go to Cripto detail')}>
            {
                coins.map((coin: Coins ) => {
                return (
                    <View style={tw`flex justify-between mt-3 mb-3 p-5 rounded-lg bg-indigo-500`} key={coin}>
                        <Text style={tw`text-lg font-bold text-white`}>{coin.toUpperCase()}</Text>
                            {
                                prices.map(price => (
                                    <View key={price[coin].usd}>
                                        <Text style={tw`pt-2 font-bold text-white`}>Price</Text>
                                        <Text style={tw`font-bold text-white`}>{formatCurrency(price[coin].usd, currency)}</Text>
                                        <Text style={tw`pt-2 font-bold text-white`}>24h Volume</Text>
                                        <Text style={tw`font-bold text-white`}>{formatCurrency(price[coin].usd_24h_vol, currency)}</Text>
                                    </View>
                                ))
                            }
                    </View>
                )}) 
            }
        </Pressable>
    )

}


export default MarketCards