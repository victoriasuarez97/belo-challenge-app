type Params = {
    max: string
    amount: string
}

type Return = {
    hasError: boolean
    errorMessage: string
}

type UseAmountValidation = (params: Params) => Return

const useAmountValidation: UseAmountValidation = ({ amount, max }) => {
    const formatMax = max.replace(',', '.')
    const maximumAmount = parseFloat(formatMax)

    if (parseFloat(amount) > maximumAmount) return {
        hasError: true,
        errorMessage: 'You dont have enough balance to operate'
    }

    return {
        hasError: false,
        errorMessage: ''
    }
}

export default useAmountValidation