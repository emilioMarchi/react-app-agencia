import React, {useState, useContext} from 'react'
import Navbar from './navbar/Navbar'
import './Header.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


import { NavbarContext } from './navbar/NavbarContext'

const Header = () => {

    const [state, setState] = useContext(NavbarContext)

    const handleBar = () => {
        if(state===false){
            setState(true)
        }else{setState(false)}
    }
    return(
        <div className='header'>
            <a href='/'>
            <img src='img/logo.png' className='logo-header' />
            </a>
            <Navbar/>
            <FontAwesomeIcon onClick={handleBar} className='bar-menu' icon={faBars} />
            <div className='line'></div>
        </div>
    )
}

export default Header