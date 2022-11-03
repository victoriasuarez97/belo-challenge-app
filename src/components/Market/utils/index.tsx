import React from "react";
import { ListRenderItem } from "react-native";
import MarketCards from "../components/Cards";
import { MarketCardsProps } from "../types";

const renderCards: ListRenderItem<MarketCardsProps> = (params) => (
    <MarketCards
        name={params.item.name}
        price={params.item.price}
        currency={params.item.currency}
        id={params.item.id}
        ticker={params.item.ticker}
        variation={params.item.variation}
    />
)

export default renderCards