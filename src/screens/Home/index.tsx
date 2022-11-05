import React, { FC } from "react";
import { Container, Header, Market } from "../../components";
import { VIEWS } from "../../constants/views";
import { useViewsContext } from "../../context/Views";

const Home: FC = () => {
    const { view } = useViewsContext()

    return (
        view === VIEWS.HOME
            ? (<Container>
                    <Header />  
                    <Market />
                </Container>)
            : (<></>)
    )
}

export default Home