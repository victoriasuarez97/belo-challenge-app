import React from "react";
import { ListRenderItem } from "react-native";
import MarketCards from "../components/Cards";
import { Price } from "../types";

const renderCards: ListRenderItem<Price> = (params) => (
    <MarketCards
        name={params.item.name}
        price={params.item.price}
        volume={params.item.volume}
    />
)

export default renderCards