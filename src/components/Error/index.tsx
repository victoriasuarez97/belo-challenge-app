import React, { FC } from "react";
import { Text } from "react-native";
import { tw } from "../../utils/tailwind";
import Container from "../Container";

const Error: FC = () => (
    <Container>
        <Text style={tw`text-white text-center`}>Oops! Something went wrong 😖</Text>
        <Text style={tw`text-white text-center`}>Please, try again later</Text>
    </Container>
)

export default Error