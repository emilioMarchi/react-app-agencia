import React, {createContext, useState} from 'react'


export const ServicesContext = createContext()

export const ServicesProvider = ({children}) => {

    const [servicesState, setServicesState] = useState({selected: 'solutions', category:'solutions'})
    const [itemData, setItemData] = useState()
    
    return(
        <ServicesContext.Provider value={[servicesState, setServicesState, itemData, setItemData]}>
            {children}
        </ServicesContext.Provider>
    )
}