import React, {useContext} from 'react'
import './ServicesContainer.css'

import Header from './nodos/Header/Header'
import List from './nodos/List.js/List'

import { ServicesProvider } from './ServicesContainerProvider'
import PopupServices from '../../popupServices/popupServices'


export default function ServicesContainer() {

    return(
                <div className='services-container'>
                    <div className='services-content'>
                        <ServicesProvider>
                            <PopupServices/>
                            <Header />
                            <List/>
                        </ServicesProvider>
                    </div>
                </div>
    )
}