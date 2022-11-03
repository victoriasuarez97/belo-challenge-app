import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { SafeAreaView } from "react-native";
import { Market, Header } from "../../components";

const Home: FC = () => {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor="white"/>
                <Header />  
                <Market />
        </SafeAreaView>
    )
}

export default Home