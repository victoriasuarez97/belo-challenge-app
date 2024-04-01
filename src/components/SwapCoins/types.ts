/* Hook */

type Params = {
    max: number
    amount: string
}

type Return = {
    hasError: boolean
    errorMessage: string
}

export type UseAmountValidation = (params: Params) => Return
