import { BASE_URL } from "../constants/api"
import { CoinInfo } from "../types"
import { axiosInstance } from "./axiosInstance"

type Params = {
    id: string
    currency: string
}

type GetCriptoPrices = (params: Params) => Promise<CoinInfo>

export const getCriptoPrices: GetCriptoPrices = async ({ id, currency }) => {
    const response = await axiosInstance(BASE_URL.COIN_GECKO)
        .get(`simple/price?ids=${id}&vs_currencies=${currency.toLowerCase()}`)
    return response.data
}