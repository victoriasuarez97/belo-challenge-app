import React, { FC } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Container, Header, HoldingCards } from "../../components";
import { useCriptoInARSQuery } from "../../hooks";
import { RootStackParamList } from "../../types";

const Home: FC<NativeStackScreenProps<RootStackParamList, 'Home'>> = () => {
     const { isLoading: isCriptoInARSLoading, isError } = useCriptoInARSQuery()

    return (
        <Container>
            <Header isLoading={isCriptoInARSLoading} />  
            <HoldingCards isLoading={isCriptoInARSLoading} isError={isError} />
        </Container>
    )
}


export default Home