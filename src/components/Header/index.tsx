import React from "react"
import { Text, View } from "react-native"
import { Avatar, Button, Icon } from '@ui-kitten/components'
import { CURRENCIES } from '../../constants/currency'
import { formatCurrency } from '../../utils'
import { tw } from "../../utils/tailwind"
import Card from '../Card'
import { useDollarBlueQuery } from './hooks/useDollarBlueQuery'
import { HeaderType } from './types'

const Header: HeaderType = ({ isLoading }) => {
	const { balance, isLoading: isDollarBlueLoading, isError } = useDollarBlueQuery({ ARSPriceIsLoading: isLoading })

	const loadingComponent = isDollarBlueLoading ? '...' : null

	const errorComponent = isError ? 'Sorry, something went wrong. Try again later 😢' : null

	const successComponent = formatCurrency(balance, 2, CURRENCIES.USD)

	return (
		<View style={tw`pb-10`}>
			<View style={tw`flex flex-row items-center bg-slate-800 p-3 rounded-lg justify-start w-36`}>
				<Avatar size='tiny' source={require('../../assets/cat.png')}/>
				<Text style={tw`pl-2 text-base text-indigo-500 font-bold`}>
					@janek1997
				</Text>
			</View>
			<Card>
				<Text style={tw`text-base text-indigo-400 text-center`}>
					Total balance
				</Text>
				<Text style={tw`pt-3 text-2xl text-white text-center font-bold`}>
					{loadingComponent || errorComponent || successComponent}
				</Text>
			</Card>
			<View style={tw`flex flex-row justify-around items-center`}>
				<Button
					appearance="outline"
					style={tw`w-40`}
					accessoryLeft={<Icon name="diagonal-arrow-right-down-outline"/>}
				>
					Receive
				</Button>
				<Button
					appearance="outline"
					style={tw`w-40`}
					accessoryLeft={<Icon name="diagonal-arrow-right-up-outline"/>}
				>
					Send
				</Button>
			</View>
		</View>
	)
}

export default Header