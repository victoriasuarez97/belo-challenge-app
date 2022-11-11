type Params = {
    max: number
    amount: string
}

type Return = {
    hasError: boolean
    errorMessage: string
}

type UseAmountValidation = (params: Params) => Return

const useAmountValidation: UseAmountValidation = ({ amount, max }) => {
    if (parseFloat(amount) > max) return {
        hasError: true,
        errorMessage: 'You dont have enough balance to operate'
    }

    return {
        hasError: false,
        errorMessage: ''
    }
}

export default useAmountValidation