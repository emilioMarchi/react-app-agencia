import React from 'react'
import './Header.css'

import Option from './Option'

export default function Header() {

    return(
        <div className='services-header'>
            <Option id='solutions' text='Soluciones 3.0' className='solutions header-btn' />
        </div>
    )
}