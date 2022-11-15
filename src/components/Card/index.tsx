import React, { FC, ReactNode } from 'react'
import { View } from 'react-native'
import { tw } from '../../utils/tailwind'

type Props = {
    children: ReactNode
}

const Card: FC<Props> = ({ children }) => (
    <View style={tw`bg-slate-800 my-3 p-3 rounded-lg`}>
        {children}
    </View>
)

export default Card
