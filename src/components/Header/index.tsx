import { Button, Icon } from '@ui-kitten/components'
import React, { FC } from "react"
import { Text, View } from "react-native"
import { CURRENCIES } from '../../constants/currency'
import { useBalanceContext } from "../../context"
import { formatCurrency } from '../../utils'
import { tw } from "../../utils/tailwind"

const Header: FC = () => {
	const { balance } = useBalanceContext()

	return (
		<View style={tw`bg-black py-10 pb-10`}>
			<Text style={tw`pl-5 text-2xl text-white text-left`}>
				Hi Jane,
			</Text>
			<Text style={tw`pt-10 pb-5 text-2xl text-white text-center font-bold`}>
				This is your wallet💸
			</Text>
			<Text style={tw`pt-3 text-2xl text-white text-center`}>
				{formatCurrency(balance, CURRENCIES.USD)}
			</Text>
			<View style={tw`pt-5 flex flex-row justify-around items-center`}>
				<Button
					appearance="outline"
					style={tw`w-40`}
					accessoryLeft={<Icon name="diagonal-arrow-right-down-outline"/>}
				>
					{"Receive"}
				</Button>
				<Button
					appearance="outline"
					style={tw`w-40`}
					accessoryLeft={<Icon name="diagonal-arrow-right-up-outline"/>}
				>
					{"Send"}
				</Button>
			</View>
		</View>
	)
}

export default Header