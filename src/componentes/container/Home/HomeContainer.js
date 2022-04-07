import React from 'react'
import './HomeContainer.css'

import ImgNodo from './nodos/ImgNodo/ImgNodo'
import TextNodo from './nodos/TextNoodo/TextNodo'

export default function HomeContainer(){
    return(
        <div className='home-container'>
            <ImgNodo  />
            <TextNodo />
        </div>
    )
}