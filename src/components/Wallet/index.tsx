import React, { FC } from "react";
import HoldingCards from "./components/HoldingCards";

type Props = {
    navigation
}

const Wallet: FC<Props> = ({ navigation }) => (<HoldingCards navigation={navigation} />)

export default Wallet