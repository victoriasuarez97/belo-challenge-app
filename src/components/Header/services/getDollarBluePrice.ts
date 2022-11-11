import axios from "axios"
import { Dollar } from "../../../types"

type GetDollarBluePrice = () => Promise<Dollar>

export const getDollarBluePrice: GetDollarBluePrice = async () => {
    const response = await axios.get('https://criptoya.com/api/dolar')
    return response.data
}