import React, { FC } from "react";
import { Container, Header, HoldingCards } from "../../components";
import { useCriptoInARSQuery } from "../../hooks";

type Props = {
    navigation
}

const Home: FC<Props> = ({ navigation }) => {
     const { isLoading: isCriptoInARSLoading } = useCriptoInARSQuery()

    return (
        <Container>
            <Header isLoading={isCriptoInARSLoading} />  
            <HoldingCards isLoading={isCriptoInARSLoading} navigation={navigation} />
        </Container>
    )
}


export default Home