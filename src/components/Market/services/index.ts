import { axiosInstance } from "../../../services/axiosInstance"

export type Response = {
    [key: string]: {
        usd: number,
        usd_24h_vol: number
    }
}

type GetCriptoPrices = () => Promise<Response>

export const getCriptoPrices: GetCriptoPrices = async () => {
    const response = await axiosInstance.get('simple/price?ids=bitcoin,ethereum,tether,dai&vs_currencies=usd&include_24hr_vol=true')
    return response.data
}