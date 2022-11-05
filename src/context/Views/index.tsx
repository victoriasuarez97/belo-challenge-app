/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, FC, ReactNode, useContext, useState } from "react"
import { VIEWS } from "../../constants/views"
import { ViewContext as ViewsContextType, Views } from "./types"

const contextDefaultValues: ViewsContextType = {
    view: VIEWS.HOME,
    setView: () => {}
}

type Props = {
    children: ReactNode
}

const ViewsContext = createContext<ViewsContextType>(contextDefaultValues)

const ViewsContextProvider: FC<Props> = ({ children }) => {
    const [view, setView] = useState<Views | string>(VIEWS.HOME)

    return(
        <ViewsContext.Provider value={{
            view,
            setView,
        }}>
            {children}
        </ViewsContext.Provider>
    )
}

const useViewsContext = (): ViewsContextType => useContext(ViewsContext)

export {
    ViewsContextProvider,
    useViewsContext
}

