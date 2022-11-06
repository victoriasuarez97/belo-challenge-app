import React, { FC } from "react";
import { View } from 'react-native';
import { CriptoBalance } from "../../types";
import { removeSelectedCoinFromHolding } from "../../utils";
import { SwapCoins } from "./components";

type Props = {
    coin: CriptoBalance
    holding: CriptoBalance[]
}

const Exchange:FC<Props> = ({ coin, holding }) => {
    const newHoldings = removeSelectedCoinFromHolding(coin.id, holding)

    return (
        <View>
            <SwapCoins coin={coin} newHolding={newHoldings}/>
        </View>
    )
}

export default Exchange