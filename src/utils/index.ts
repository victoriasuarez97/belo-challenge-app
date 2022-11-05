export const formatCurrency = (value: number): string => {
    const formattedNumber = value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
    return `$${formattedNumber}`
}