import { Button, Input, Select, SelectItem, Spinner, useTheme } from "@ui-kitten/components"
import React, { FC, useEffect, useState } from "react"
import { Text, View } from "react-native"
import { VIEWS } from "../../constants/common"
import { useBalanceContext } from "../../context"
import { useCriptoPricesQuery } from "../../hooks"
import { CriptoBalance } from "../../types"
import { getConversion } from "../../utils"
import { tw } from "../../utils/tailwind"
import Error from "../Error"
import CriptoCard from "./components/CriptoCard"
import useAmountValidation from "./hooks"

type Props = {
    coin: CriptoBalance
    newHolding: CriptoBalance[]
    navigation
}

const SwapCoins: FC<Props> = ({ coin, newHolding, navigation }) => {
    const theme = useTheme()

    const { conversion, setConversion, amount, setAmount, setSwapCoin, swapCoin } = useBalanceContext()

    const [selectedIndex, setSelectedIndex] = useState(undefined);
    
    const selectCoin = (index): void => {
        setSelectedIndex(index)
        const findCoin = newHolding[index.row]
        setSwapCoin(findCoin)
    }

    const { coinInfo, isError, isLoading } = useCriptoPricesQuery({ id: coin.id, currency: swapCoin.currency })

    useEffect(() => {
        if (selectedIndex && coinInfo  && amount) {
            const coinValue = coinInfo[coin.id][swapCoin.ticker.toLowerCase()]
            const estimatedAmount = getConversion(amount, coinValue)
            setConversion(estimatedAmount)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount, coinInfo, selectedIndex, coin])

    const { hasError, errorMessage } = useAmountValidation({
        max: coin.balance,
        amount
    })

    if (isError) return <Error />

    return(
        <View>
            <Text style={tw`text-3xl font-bold text-white text-center`}>
                {coin.ticker}
            </Text>
            <Input
                onChangeText={(newAmount) => setAmount(newAmount)}
                value={amount}
                keyboardType="numeric"
                caption={hasError && <View><Text style={{ color: theme['color-danger-500']}}>{errorMessage}</Text></View>}
                textStyle={{ textAlign: 'center', color: theme['color-primary-100']}}
                style={tw`text-center text-white mt-3 pb-3 bg-slate-900 text-xl rounded-lg`}
                status={hasError ? 'danger' : 'success'}
            />
            <Text style={tw`pb-5 text-sm font-bold text-center text-slate-700`}>
                {`Your balance: ${coin.balance}`}
            </Text>
            <View>
                {isLoading
                    ? <View style={{ alignSelf: 'center'}}><Spinner /></View>
                    : <Text style={tw`py-5 text-2xl font-bold text-white text-center`}>  
                        {`${conversion}${swapCoin.currency}`}
                    </Text>
                }   
            </View>
            <Select
                status='primary'
                value={swapCoin.name}
                selectedIndex={selectedIndex}
                onSelect={index => selectCoin(index)}
                placeholder='Choose coin'
                style={tw`my-3`}
            >
                {
                    newHolding.map((holding) => (
                        <SelectItem title={holding.name} key={holding.ticker}/>
                    ))
                }
            </Select>
            {coinInfo && <CriptoCard coin={coin} selectedCoin={swapCoin} coinInfo={coinInfo} isLoading={isLoading} />}
            <Button disabled={hasError} onPress={() => navigation.navigate(VIEWS.CONFIRMATION)}>
                SWAP
            </Button>
        </View>
    )
}

export default SwapCoins