import React, { FC } from "react"
import { Text, View } from "react-native"
import { tw } from "../../../../utils/tailwind"
import { MarketCardsProps } from "../../types"

const MarketCards: FC<MarketCardsProps> = ({ name, currency, price, volume }) => {
    
    return(
        <View style={tw`mt-3 mb-3 p-5 rounded-lg bg-teal-500`} key={name}>
            <View style={tw`flex flex-row justify-between`}>
                <Text style={tw`font-bold text-white`}>{name}</Text>
                <Text style={tw`font-bold text-white`}>{`${currency} ${price}`}</Text>
            </View>
            <View style={tw`flex flex-row justify-between`}>
                <Text style={tw`font-bold text-white`}>{'ticker'}</Text>
                <Text style={tw`font-bold text-white`}>{volume}</Text>
            </View>
        </View>
    )
}

export default MarketCards