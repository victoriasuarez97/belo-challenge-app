import React, { FC } from 'react'
import { Pressable, Text } from "react-native"
import { tw } from '../../utils/tailwind'

type Props = {
    title: string
    onClick: () => void,
    isSecondary?: boolean
}

const Button: FC<Props> = ({ title, onClick, isSecondary }) => {
    const styles = isSecondary ? 'rounded-lg border-2 border-amber-500' : 'bg-amber-500'

    return (
        <Pressable style={tw`w-42 py-3 px-10 rounded-lg ${styles}`} onPress={onClick}>
            <Text style={tw`text-white font-bold text-center`}>
                {title}
            </Text>
        </Pressable>
    )
}

export default Button