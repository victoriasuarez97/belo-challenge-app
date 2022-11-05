import React, { FC } from 'react'
import { Pressable, Text } from "react-native"
import { tw } from '../../utils/tailwind'

type Props = {
    title: string
    onClick: () => void
}

const Button: FC<Props> = ({ title, onClick }) => {
    return (
        <Pressable style={tw`w-40 py-3 px-10 bg-amber-400 rounded-lg shadow-md`} onPress={onClick}>
            <Text style={tw`text-black font-bold text-center`}>
                {title}
            </Text>
        </Pressable>
    )
}

export default Button