import React, { FC } from "react"
import { Text, View } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { Avatar, Button } from "@ui-kitten/components"
import { Container } from "../../components"
import { RootStackParamList } from "../../types"
import { tw } from "../../utils/tailwind"

const Result: FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
    
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
                <Button onPress={() => navigation.navigate('Home')}>
                    GO BACK HOME
                </Button>
            </View>
        </Container>
    )
}

export default Result