import { Dispatch, SetStateAction } from "react"
import { VIEWS } from "../../constants/views"

export type Views = typeof VIEWS[keyof typeof VIEWS]

export type ViewContext = {
    view: Views | string
    setView: Dispatch<SetStateAction<Views>>
}