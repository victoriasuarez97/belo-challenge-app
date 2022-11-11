import { Button } from "@ui-kitten/components"
import React, { FC } from "react"
import { Text } from "react-native"
import { Container } from "../../components"
import { VIEWS } from "../../constants/common"
import { tw } from "../../utils/tailwind"

type Props = {
    navigation
}

const Result: FC<Props> = ({ navigation }) => {
    return (
        <Container>
            <Text style={tw`py-10 text-3xl font-bold text-white text-center`}>Congratulations!</Text>
            <Text style={tw`pb-5 text-xl text-white text-center`}>If you are here, it means everythings okay :)</Text>
            <Button onPress={() => navigation.navigate(VIEWS.HOME)}>GO BACK HOME</Button>
        </Container>
    )
}

export default Result