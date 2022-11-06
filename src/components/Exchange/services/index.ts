import { axiosInstance } from "../../../services/axiosInstance"
import { CriptoInfo } from "../../../types"

type Params = {
    id: string
    currency: string
}

type GetCriptoPrices = (params: Params) => Promise<CriptoInfo>

export const getCriptoPrices: GetCriptoPrices = async ({ id, currency }) => {
    const response = await axiosInstance.get(`simple/price?ids=${id}&vs_currencies=${currency}&include_24hr_vol=true&include_24hr_change=true`)
    return response.data
}