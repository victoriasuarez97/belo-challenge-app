import React from 'react'
import { View } from 'react-native'
import { tw } from '../../utils/tailwind'
import { CardType } from './types'

const Card: CardType = ({ children }) => (
    <View style={tw`bg-slate-800 my-3 p-3 rounded-lg`}>
        {children}
    </View>
)

export default Card
