import React, { FC } from "react";
import { Text, View } from "react-native";
import { tw } from "../../utils/tailwind";

const Error: FC = () => (
    <View><Text style={tw`text-white`}>Ups, algo salió mal :(</Text></View>
)

export default Error