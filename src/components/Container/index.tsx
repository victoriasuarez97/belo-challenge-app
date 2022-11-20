import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Icon, TopNavigationAction } from "@ui-kitten/components";
import React, { FC, ReactNode } from "react";
import { SafeAreaView, ScrollView, StatusBar, View } from "react-native";
import { RootStackParamList } from "../../types";
import { tw } from "../../utils/tailwind";

type Props = {
    children: ReactNode
    goBack?: boolean
    navigation?: NativeStackNavigationProp<RootStackParamList>
}

const Container: FC<Props> = ({ children, navigation, goBack }) => (
    <SafeAreaView style={tw`bg-slate-900 p-3 h-full`}>
        <StatusBar backgroundColor="black"/>
        <View style={tw`pt-3`}>
            <ScrollView>
                {
                    goBack &&
                        <TopNavigationAction icon={<Icon name="arrow-back" />} onPress={() => navigation.goBack()} />
                }
                {children}
            </ScrollView>
        </View>
    </SafeAreaView>
)


export default Container