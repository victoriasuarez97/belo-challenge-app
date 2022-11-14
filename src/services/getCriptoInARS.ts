import { BASE_URL } from "../constants/api"
import { CoinInfo } from "../types"
import { axiosInstance } from "./axiosInstance"

type GetCriptoInARS = () => Promise<CoinInfo>

export const getCriptoInARS: GetCriptoInARS = async () => {
    const response = await axiosInstance(BASE_URL.COIN_GECKO).get(`simple/price?ids=bitcoin,binancecoin,ethereum,polkadot&vs_currencies=ars`)
    return response.data
}