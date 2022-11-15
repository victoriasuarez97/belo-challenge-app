import React, { FC } from "react";
import { Container, Header, HoldingCards } from "../../components";
import { useCriptoInARSQuery } from "../../hooks";

type Props = {
    navigation
}

const Home: FC<Props> = ({ navigation }) => {
     const { isLoading: isCriptoInARSLoading, isError } = useCriptoInARSQuery()

    return (
        <Container>
            <Header isLoading={isCriptoInARSLoading} />  
            <HoldingCards isLoading={isCriptoInARSLoading} isError={isError} navigation={navigation} />
        </Container>
    )
}


export default Home