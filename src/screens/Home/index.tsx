import React, { FC } from "react";
import { Container, Header, Wallet } from "../../components";

type Props = {
    navigation
}

const Home: FC<Props> = ({ navigation }) => (
    <Container>
        <Header />  
        <Wallet navigation={navigation} />
    </Container>
)

export default Home