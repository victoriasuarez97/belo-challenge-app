import React, { FC } from "react";
import { Container, Header, Wallet } from "../../components";
import { VIEWS } from "../../constants/views";
import { useViewsContext } from "../../context/Views";

const Home: FC = () => {
    const { view } = useViewsContext()

    return (
        view === VIEWS.HOME
            ? (<Container>
                    <Header />  
                    <Wallet />
                </Container>)
            : (<></>)
    )
}

export default Home