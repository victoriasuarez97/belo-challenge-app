import React, { FC, ReactNode } from "react";
import { Pressable, SafeAreaView, ScrollView, StatusBar, Text } from "react-native";
import { tw } from "../../utils/tailwind";

type Props = {
    children: ReactNode
    goBack?: boolean
    navigation?
}

const Container: FC<Props> = ({ children, navigation, goBack }) => (
    <SafeAreaView style={tw`bg-black p-2 h-full`}>
        <StatusBar backgroundColor="black"/>
            <ScrollView>
                {
                    goBack &&
                        <Pressable onPress={() => navigation.goBack()}>
                            <Text style={tw`pt-5 text-lg text-white`}>👈 Go back</Text>
                        </Pressable>
                }
                {children}
            </ScrollView>
    </SafeAreaView>
)


export default Container