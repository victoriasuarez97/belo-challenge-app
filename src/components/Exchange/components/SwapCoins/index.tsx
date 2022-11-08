import { Input, Select, SelectItem, Spinner } from "@ui-kitten/components"
import React, { FC, useEffect, useState } from "react"
import { Text, View } from "react-native"
import { useBalanceContext } from "../../../../context"
import { useCriptoPricesQuery } from "../../../../hooks"
import { CriptoBalance } from "../../../../types"
import { getConversion } from "../../../../utils"
import { tw } from "../../../../utils/tailwind"
import Error from "../../../Error"

type Props = {
    coin: CriptoBalance
    newHolding: CriptoBalance[]
}


const SwapCoins: FC<Props> = ({ coin, newHolding }) => {
    const { conversion, setConversion } = useBalanceContext()

    const [selectedIndex, setSelectedIndex] = useState(undefined);
    const [selectedCoin, setSelectedCoin] = useState<CriptoBalance>({
        id: '',
        ticker: '',
        name: '',
        balance: '',
        currency: ''
    })
    const [amount, setAmount] = useState<string>('0')
    
    const selectCoin = (index): void => {
        setSelectedIndex(index)
        const findCoin = newHolding[index.row]
        setSelectedCoin(findCoin)
    }

    const { coinInfo, isError, isLoading } = useCriptoPricesQuery({ id: coin.id, currency: selectedCoin.currency })

    useEffect(() => {
        if (selectedIndex && coinInfo  && amount) {
            const coinValue = coinInfo[coin.id][selectedCoin.ticker.toLowerCase()]
            const estimatedAmount = getConversion(amount, coinValue)
            setConversion(estimatedAmount)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [amount, coinInfo, selectedIndex, coin])

    if (isError) return <Error />

    return(
        <View>
            <Text style={tw`text-3xl font-bold text-white text-center`}>
                {coin.ticker}
            </Text>
            <Input
                onChangeText={(newAmount) => setAmount(newAmount)}
                value={amount}
                placeholder="0"
                keyboardType="numeric"
                textStyle={{ textAlign: 'center', color: '#ffffff'}}
                style={tw`text-center text-white my-3 p-3 bg-slate-900 text-xl rounded-lg`}
            />
            <Text style={tw`pb-5 text-sm font-bold text-center text-slate-700`}>
                {`Your balance: ${coin.balance}`}
            </Text>
            <View>
                {isLoading
                    ? <View style={{ alignSelf: 'center'}}><Spinner /></View>
                    : <Text style={tw`py-5 text-2xl font-bold text-white text-center`}>  
                        {conversion}
                    </Text>
                }   
            </View>
            <Select
                status='primary'
                value={selectedCoin.name}
                selectedIndex={selectedIndex}
                onSelect={index => selectCoin(index)}
                placeholder='Choose coin'
            >
                {
                    newHolding.map((holding) => (
                        <SelectItem title={holding.name} key={holding.ticker}/>
                    ))
                }
            </Select>
        </View>
    )
}

export default SwapCoins