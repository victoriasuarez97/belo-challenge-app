import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Header, Market } from "../../components";
import { tw } from "../../utils/tailwind";

const Home: FC = () => {
    return (
        <SafeAreaView style={tw`bg-black`}>
            <StatusBar backgroundColor="white"/>
            <ScrollView>
                <Header />  
                <Market />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home