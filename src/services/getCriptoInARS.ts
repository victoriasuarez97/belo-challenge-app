import { CriptoInfo } from "../types"
import { axiosInstance } from "./axiosInstance"

type GetCriptoInARS = () => Promise<CriptoInfo>

export const getCriptoInARS: GetCriptoInARS = async () => {
    const response = await axiosInstance.get(`simple/price?ids=bitcoin,binancecoin,ethereum,polkadot&vs_currencies=ars`)
    return response.data
}