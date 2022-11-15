import { Avatar, Button } from "@ui-kitten/components"
import React, { FC } from "react"
import { Text, View } from "react-native"
import { Container } from "../../components"
import { VIEWS } from "../../constants/common"
import { tw } from "../../utils/tailwind"

type Props = {
    navigation
}

const Result: FC<Props> = ({ navigation }) => {
    return (
        <Container>
            <View style={tw`p-2`}>
                <Avatar size="giant" style={{ alignSelf: 'center'}} source={require('../../assets/checkbox.png')}/>
                <Text style={tw`py-5 text-2xl font-bold text-white text-center`}>
                    Success!
                </Text>
                <Text style={tw`pb-5 text-lg text-white text-center`}>
                    If you are here, it means everything is okay 😌
                </Text>
                <Text style={tw`pb-5 text-base text-white text-center`}>
                    Your balance is now updated
                </Text>
                <Button onPress={() => navigation.navigate(VIEWS.HOME)}>GO BACK HOME</Button>
            </View>
        </Container>
    )
}

export default Result