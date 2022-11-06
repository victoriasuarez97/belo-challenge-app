import { IndexPath, Select, SelectItem, Spinner } from "@ui-kitten/components"
import React, { FC, useState } from "react"
import { Text, TextInput, View } from "react-native"
import { useBalanceContext } from "../../../../context"
import { useCriptoPricesQuery } from "../../../../hooks"
import { CriptoBalance } from "../../../../types"
import { tw } from "../../../../utils/tailwind"
import Error from "../../../Error"

type Props = {
    coin: CriptoBalance
    newHolding: CriptoBalance[]
}

const SwapCoins: FC<Props> = ({ coin, newHolding }) => {
    const { bitcoin, swapCoin, setSwapCoin } = useBalanceContext()
    const { coinInfo, isError, isLoading } = useCriptoPricesQuery({ id: coin.id, currency: swapCoin.currency})

    const [selectedIndex, setSelectedIndex] = useState(new IndexPath(0));
    const [amount, setAmount] = useState<string>()

    if (isError) return <Error />
    if (isLoading) return <Spinner />
    
    return(
        <View>
            <Text style={tw`text-3xl font-bold text-white text-center`}>{coin.ticker}</Text>
            <TextInput
                onChangeText={(newAmount) => setAmount(newAmount)}
                value={amount}
                placeholder="0"
                keyboardType="numeric"
                style={tw`text-center text-white my-3 p-3 bg-slate-900 text-xl rounded-lg`}
            />
            <Text style={tw`text-sm font-bold text-center text-slate-700`}>
                {`Your balance: ${bitcoin.balance}`}
            </Text>
            {
                coinInfo[coin.name] && <Text style={tw`pt-5 text-xl font-bold text-white text-center`}>  
                    {parseFloat(amount) / (coinInfo[coin.id][swapCoin.ticker.toLowerCase()])}
                </Text>
            }
            <Select
                status='primary'
                value={newHolding[selectedIndex.row].name}
                selectedIndex={selectedIndex}
                onSelect={index => {setSelectedIndex(index); setSwapCoin(newHolding[selectedIndex.row])}}
                placeholder='Choose coin'
            >
                {
                    newHolding.map((coin) => (
                        <SelectItem title={coin.name} key={coin.ticker}/>
                    ))
                }
            </Select>
        </View>
    )
}

export default SwapCoins