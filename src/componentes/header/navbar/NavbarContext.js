import React, { useState, createContext} from 'react' 

export const NavbarContext = createContext()

export const NavbarProvider = ({children}) => {

    const [state, setState] = useState(true)


    return(
    <NavbarContext.Provider value = {[state, setState]} >
        {children}
    </NavbarContext.Provider>
    )
}