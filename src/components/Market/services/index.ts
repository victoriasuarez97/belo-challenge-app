import { axiosInstance } from "../../../services/axiosInstance"
import { CriptoInfo } from "../../../types"

type GetCriptoPrices = () => Promise<CriptoInfo>

export const getCriptoPrices: GetCriptoPrices = async () => {
    const response = await axiosInstance.get('simple/price?ids=bitcoin,ethereum,tether,dai&vs_currencies=usd&include_24hr_vol=true')
    return response.data
}