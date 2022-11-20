import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Button, IndexPath, Input, Select, SelectItem, Spinner, useTheme } from "@ui-kitten/components"
import React, { FC, useEffect, useState } from "react"
import { Text, View } from "react-native"
import { useBalanceContext } from "../../context"
import { useCriptoPricesQuery } from "../../hooks"
import { RootStackParamList } from "../../types"
import { formatCurrency, getConversion, removeSelectedCoinFromHolding } from "../../utils"
import { tw } from "../../utils/tailwind"
import Card from "../Card"
import Error from "../Error"
import useAmountValidation from "./hooks"

const SwapCoins: FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

    const theme = useTheme()

    const { holding, fromCoin, conversion, setConversion, amount, setAmount, setToCoin, toCoin } = useBalanceContext()

    const newHoldings = removeSelectedCoinFromHolding(fromCoin.id, holding)

    const [selectedIndex, setSelectedIndex] = useState(undefined)
    
    const selectCoin = (index: IndexPath): void => {
        setSelectedIndex(index)
        const findCoin = newHoldings[index.row]
        setToCoin(findCoin)
    }

    const { coinInfo, isError, isLoading } = useCriptoPricesQuery({ id: fromCoin.id, currency: toCoin.currency })

    useEffect(() => {
        if (!isLoading && selectedIndex && coinInfo && amount) {
            const coinValue = coinInfo[fromCoin.id][toCoin.ticker.toLowerCase()]
            const estimatedAmount = getConversion(amount, coinValue)
            setConversion(parseFloat(estimatedAmount))
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount, coinInfo, selectedIndex, fromCoin, isLoading])

    const { hasError, errorMessage } = useAmountValidation({
        max: fromCoin.balance,
        amount
    })

    if (isError) return <Error />

    return(
        <View style={tw`p-2`}>
            <Text style={tw`py-5 text-2xl font-bold text-white text-left`}>
                Swap coins
            </Text>
            <Card>
                <Text style={tw`text-3xl font-bold text-white text-center`}>
                    {fromCoin.ticker}
                </Text>
                <Input
                    onChangeText={newAmount => setAmount(newAmount)}
                    value={amount}
                    keyboardType="numeric"
                    caption={hasError && <View><Text style={{ color: theme['color-danger-500']}}>{errorMessage}</Text></View>}
                    textStyle={{ textAlign: 'center', color: theme['color-primary-100']}}
                    style={tw`text-center text-white mt-3 pb-3 bg-slate-900 text-xl rounded-lg`}
                    status={hasError ? 'danger' : 'success'}
                    maxLength={10}
                />
                <Text style={tw`pb-5 text-sm font-bold text-center text-indigo-400`}>
                    {`${fromCoin.name} balance: ${formatCurrency(fromCoin.balance, 8, fromCoin.currency)}`}
                </Text>
                <View>
                    {isLoading
                        ? <View style={{ alignSelf: 'center'}}><Spinner /></View>
                        : <Text style={tw`pt-5 text-3xl font-bold text-white text-center`}>  
                            {formatCurrency(conversion, 8, toCoin.currency)}
                        </Text>
                    }   
                </View>
                <Select
                    status='primary'
                    value={toCoin.name}
                    selectedIndex={selectedIndex}
                    onSelect={(index: IndexPath) => selectCoin(index)}
                    placeholder='Choose coin'
                    style={tw`mt-3 mb-2`}
                >
                    {
                        newHoldings.map((holding) => (
                            <SelectItem title={holding.name} key={holding.ticker}/>
                        ))
                    }
                </Select>
            </Card>
            <Button
                disabled={hasError || amount === '0' || amount === ''}
                onPress={() => { navigation.navigate('Confirmation'); setSelectedIndex(undefined) }}>
                SWAP
            </Button>
        </View>
    )
}

export default SwapCoins