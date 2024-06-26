import { BASE_URL } from "../../../constants/api"
import { axiosInstance } from "../../../services/axiosInstance"
import { GetDollarBluePrice } from "../types"

export const getDollarBluePrice: GetDollarBluePrice = async () => {
    const response = await axiosInstance(BASE_URL.CRIPTO_YA).get('dolar')
    return response.data
}