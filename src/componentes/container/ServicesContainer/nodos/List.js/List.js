import React, {useContext} from 'react'

import './List.css'


import CardsListView from '../../views/CardsListView'


import { ServicesContext } from '../../ServicesContainerProvider'


import { SolutionsData, PackagesData, DevelopmentData } from './ListData'

export default function List() {

    const [servicesState, setServicesState] = useContext(ServicesContext)

    return(
        <div className='services-list'> 
            {
                servicesState && servicesState.selected === 'solutions' ? <CardsListView data={SolutionsData}/> :
                servicesState && servicesState.selected === 'packages' ? <CardsListView data={PackagesData} /> :
                servicesState && servicesState.selected === 'Desarrollo Web' || 
                servicesState.selected === 'Landing Page' || 
                servicesState.selected === 'Web Corporativa' ||
                servicesState.selected === 'Tienda Online' ? <CardsListView data={DevelopmentData} /> :
                <h1>otra cosa</h1>
            }
        </div>
    )
}