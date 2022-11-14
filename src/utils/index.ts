import { CriptoBalance, Currencies } from "../types"

export const formatCurrency = (value: number, decimals: number, currency: Currencies): string => (
    `${value.toFixed(decimals)} ${currency}`
)

export const removeSelectedCoinFromHolding = (id: string, holdings: CriptoBalance[]): CriptoBalance[] => (
    holdings.filter((holding) => holding.id !== id)
)

export const getCriptoBalanceInARS = (criptoBalance: number, ars: number): number => (
    criptoBalance * ars
)

export const getTotalBalanceInARS = async (holding: CriptoBalance[]): Promise<number> => {
    const filterByBalance = holding.map((coin) => coin.ars)
    const sum = filterByBalance.reduce((a, b) => a + b, 0)
    return sum
}

export const getTotalBalance = async (holding: CriptoBalance[], dollarBlue: number): Promise<number> => {
    const arsBalance = await getTotalBalanceInARS(holding)
    return arsBalance / dollarBlue
}

export const findCoinByName = (name: string, holdings: CriptoBalance[]): CriptoBalance => (
    holdings.find((holding) => holding.name === name)
)

export const getConversion = (amount: string, coinValue: number): string => {
    const estimatedAmount = parseFloat(amount) * coinValue
    return estimatedAmount.toFixed(8)
}

export const updateHolding = (holding: CriptoBalance[], coin: CriptoBalance, updatedBalance: number): CriptoBalance[] => (
    holding.map((tenure) => (tenure === coin
        ? { ...tenure, balance: updatedBalance }
        : tenure
    ))
)

export const substractionBalance = (coinBalance: number, amountInvested: number): number => (
    coinBalance - amountInvested
)

export const addBalance = (amountInvested: number, coinBalance: number): number => (
    amountInvested + coinBalance
)
