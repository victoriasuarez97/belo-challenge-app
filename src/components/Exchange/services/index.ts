import { axiosInstance } from "../../../services/axiosInstance"
import { CriptoInfo } from "../../../types"

type Params = {
    id: string
}

type GetCriptoPrices = (params: Params) => Promise<CriptoInfo>

export const getCriptoPrices: GetCriptoPrices = async ({ id }) => {
    const response = await axiosInstance.get(`simple/price?ids=${id}&vs_currencies=usd&include_24hr_vol=true&include_24hr_change=true`)
    return response.data
}