import React, {useContext} from 'react'
import $ from 'jquery'
import './Card.css'
import CardDetail from './CardDetail'

import { ServicesContext} from '../../ServicesContainerProvider'

export default function Card(props) {

    const item = props.data
    const [servicesState, setServicesState, itemData, setItemData] = useContext(ServicesContext)


    return(
        <div onClick={()=>{
            setItemData(item)

            setServicesState({ selected: `${item.title}`, category:`${item.category}`, subCategory: `${item.subCategory}` })

        }} className='services-card'>
            <CardDetail data={item} />
            <a className='btn button'>Ver soluciones</a>
        </div>
    )
}