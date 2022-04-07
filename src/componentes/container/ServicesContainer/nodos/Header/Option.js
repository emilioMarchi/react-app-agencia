import React, {useContext} from 'react'

import {ServicesContext} from '../../ServicesContainerProvider'


const Option = (props) => {

    const [servicesState, setServicesState] = useContext(ServicesContext)

    const handleOptions = () => {
        setServicesState({selected: `${props.id}`})
    }

    return(
        <div className={servicesState.selected === `${props.id}` ? 'header-options selected' :
        servicesState.category === `${props.id}` ? 'header-options selected' : 'header-options'} onClick={handleOptions}>{props.text} </div>
    )
}

export default Option