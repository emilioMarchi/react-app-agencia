import React, {useContext} from 'react'
import './Navbar.css'

import { NavbarContext } from './NavbarContext'

const Navbar = () => {

    const [state, setState] = useContext(NavbarContext)

    const handleBar = () => {
        if(state===false){
            setState(true)
        }else{setState(false)}
    }

    return(
        <nav className='nav'>
            <div className='nav-border'>
                <ul>
                    <li><a href='#home'>Inicio</a></li>
                    <li><a href='#services'>¿Qué hacemos?</a></li>
                    <li><a href='#cards-services'>Servicios</a></li>
                    <li><a href='#contact'>Contacto</a></li>
                </ul>
            </div>
            <div className={state === true ? 'd-none' : 'nav-mobile'}>
                <ul >
                    <li><a onClick={handleBar} href='#home'>Inicio</a></li>
                    <li><a onClick={handleBar} href='#services'>¿Qué hacemos?</a></li>
                    <li><a onClick={handleBar} href='#cards-services'>Servicios</a></li>
                    <li><a onClick={handleBar} href='#contact'>Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar