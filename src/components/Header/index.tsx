import React, { FC } from "react"
import { View, Text } from "react-native"
import { tw } from "../../utils/tailwind"
import Button from "../Button"

const Header: FC = () => {
	return (
		<View style={tw`bg-black pt-20 pb-10`}>
			<Text style={tw`pl-5 text-2xl text-white text-left`}>
				Hi Jane,
			</Text>
			<Text style={tw`pt-10 text-2xl text-white text-center font-bold`}>
				This is your wallet💸
			</Text>
			<Text style={tw`pt-3 text-2xl text-white text-center`}>
				$2.809,34
			</Text>
			<View style={tw`pt-5 flex flex-row justify-around items-center`}>
				<Button title="Send ⬆️" onClick={() => console.log('im send')}/>
				<Button title="Receive ⬇️" onClick={() => console.log('im received')} />
			</View>
		</View>
	)
}

export default Header