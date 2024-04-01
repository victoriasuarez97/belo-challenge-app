import { UseAmountValidation } from "../types"

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