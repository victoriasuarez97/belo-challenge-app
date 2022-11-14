import { BASE_URL } from "../../../constants/api"
import { axiosInstance } from "../../../services/axiosInstance"
import { Dollar } from "../../../types"

type GetDollarBluePrice = () => Promise<Dollar>

export const getDollarBluePrice: GetDollarBluePrice = async () => {
    const response = await axiosInstance(BASE_URL.CRIPTO_YA).get('dolar')
    return response.data
}