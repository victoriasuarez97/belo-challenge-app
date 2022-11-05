import React, { FC, ReactNode } from "react";
import { Pressable, SafeAreaView, ScrollView, StatusBar, Text } from "react-native";
import { VIEWS } from "../../constants/views";
import { useViewsContext } from "../../context";
import { Views } from "../../context/Views/types";
import { tw } from "../../utils/tailwind";

type Props = {
    children: ReactNode
    goTo?: Views
}

const Container: FC<Props> = ({ children, goTo }) => {
    const { view, setView } = useViewsContext()

    const showGoBackButton = view !== VIEWS.HOME

    return (
        <SafeAreaView style={tw`bg-black p-2`}>
            <StatusBar backgroundColor="black"/>
                <ScrollView>
                    {
                        showGoBackButton &&
                            <Pressable onPress={() => setView(goTo)}>
                                <Text style={tw`pt-10 text-lg text-white`}>👈 Go back</Text>
                            </Pressable>
                    }
                    {children}
                </ScrollView>
        </SafeAreaView>
    )
}


export default Container