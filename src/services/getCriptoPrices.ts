import { CriptoInfo } from "../types"
import { axiosInstance } from "./axiosInstance"

type Params = {
    id: string
    currency: string
}

type GetCriptoPrices = (params: Params) => Promise<CriptoInfo>

export const getCriptoPrices: GetCriptoPrices = async ({ id, currency }) => {
    const response = await axiosInstance.get(`simple/price?ids=${id}&vs_currencies=${currency.toLowerCase()}`)
    return response.data
}