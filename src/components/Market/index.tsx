import React, { FC } from "react";
import { View, Text, FlatList } from "react-native";
import MOCK_COINS from "../../mocks";
import { tw } from "../../utils/tailwind";
import renderCards from "./utils";

const Market: FC = () => {
    return (
        <View style={tw`m-5 p-5 border-amber-500 rounded-lg border-2`}>
            <Text style={tw`font-bold text-xl`}>Market 📈</Text>
            <FlatList
                data={MOCK_COINS}
                renderItem={renderCards}
                keyExtractor={props => props.id}
            />
        </View>
    )
}

export default Market