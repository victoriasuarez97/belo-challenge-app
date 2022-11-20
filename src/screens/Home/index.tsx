import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { FC } from "react";
import { Container, Header, HoldingCards } from "../../components";
import { useCriptoInARSQuery } from "../../hooks";
import { RootStackParamList } from "../../types";

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

const Home: FC<Props> = () => {
     const { isLoading: isCriptoInARSLoading, isError } = useCriptoInARSQuery()

    return (
        <Container>
            <Header isLoading={isCriptoInARSLoading} />  
            <HoldingCards isLoading={isCriptoInARSLoading} isError={isError} />
        </Container>
    )
}


export default Home