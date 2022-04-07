import React, {useContext} from 'react'
import $ from 'jquery'
import './styles.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { ServicesContext } from '../container/ServicesContainer/ServicesContainerProvider'
import { Graphic } from './Graphic'

const PopupServices = () => {

    const [servicesState, setServicesState, itemData] = useContext(ServicesContext)

    const item = itemData

    const closePopup = () => {
        const element = $('.popup-background')
        element[0].className = 'popup-background d-none'
        setServicesState({ selected: `${servicesState.selected}`, category:`${servicesState.category}`, subCategory: `${undefined}`})
    }
    
    return (
        <div>
            {
                servicesState.subCategory === 'item-services' ? 
                <div className='popup-background'>
                    <div className='popup-container'>
                        <div className='popup-header'>
                            <FontAwesomeIcon onClick={closePopup} className='popup-icon' icon={faCircleArrowLeft} />
                            <a href='#contacto' onClick={closePopup}>Consultar solución</a>
                            </div>
                        <div className='popup-content'>
                            <img src='./img/pruebapng.png'  />
                            <div>
                                <h1>{item.title}</h1>
                                <h2>{item.description}</h2>
                            </div>
                        </div> 
                        <div className='popup-detail'>
                            <div className='features detail'>
                                <h3>Caracteristicas</h3>
                                <div className='features-list'>
                                    {
                                        item.features.map((item) => {
                                            return(
                                                <div>○ {item}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className='utilities detail'>
                                <h3>Utilidades</h3>
                                <div className='utilities-list'>
                                    {
                                        item.utilities.map((item) => {
                                            return (
                                                <div>{item}</div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <Graphic data={item.dataGraphic}/>
                        </div>
                    </div>
                </div> : <div></div>
            }
        </div>
    )
}

export default PopupServices