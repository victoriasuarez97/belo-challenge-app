import React, { FC } from "react"
import { Container, Exchange } from "../../components"
import { VIEWS } from "../../constants/views"
import { useBalanceContext } from "../../context"
import { useViewsContext } from "../../context/Views"

const Swap: FC = () => {
    const { view } = useViewsContext()
    const { chosenCoin } = useBalanceContext()

    return (
        <Container goTo={VIEWS.HOME}>
            {
                view === VIEWS.SWAP
                    ? (<Exchange coin={chosenCoin}/>)
                    : (<></>)
            }
        </Container>
    )
}

export default Swap  