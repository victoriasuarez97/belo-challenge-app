import React, { FC } from "react"
import { Text, View } from "react-native"
import { Container } from "../../components"
import { VIEWS } from "../../constants/views"
import { useBalanceContext } from "../../context"
import { useViewsContext } from "../../context/Views"
import { tw } from "../../utils/tailwind"

const Swap: FC = () => {
    const { view } = useViewsContext()
    const { chosenCoin } = useBalanceContext()

    return (
        <Container goTo={VIEWS.HOME}>
            {
                view === VIEWS.SWAP
                    ? (<View>
                            <Text style={tw`text-white`}>Exchange</Text>
                            <Text style={tw`text-white`}>{chosenCoin}</Text>
                        </View>)
                    : (<></>)
            }
        </Container>
    )
}

export default Swap