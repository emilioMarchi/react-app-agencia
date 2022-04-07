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
                    <li><a href='#inicio'>Inicio</a></li>
                    <li><a href='#soluciones'>Servicios</a></li>
                    <li><a href='#contacto'>Contacto</a></li>
                </ul>
            </div>
            <div className={state === true ? 'd-none' : 'nav-mobile'}>
                <ul >
                    <li><a onClick={handleBar} href='#inicio'>Home</a></li>
                    <li><a onClick={handleBar}  href='#soluciones'>Servicios</a></li>
                    <li><a onClick={handleBar} href='#contacto'>Contacto</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar