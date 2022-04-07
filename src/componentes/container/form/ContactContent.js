import React, {useState} from 'react'
import Form from './Form'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const ContactContent = () => {
    
    const [state, setState] = useState({selected: 'msg'})
    console.log(state)
    return(
        <div className='contact-content'>
            <div className='form-text col-md-6'>
                <h3>Comunicate con nosotros a traves de nuestros portales</h3>
                <div className='line'></div>
            </div>
            <div className='form-contact'>
                <div className='form-menu'>
                    <FontAwesomeIcon onClick={()=>{setState({selected: 'msg'})}} className={state.selected === 'msg' ? 'form-icon form-selected' : 'form-icon'} icon={faEnvelope} />
                </div>
                {
                    state.selected === 'msg' ? <Form /> :
                    <div className='wp-button'>
                        <a href='https://wa.me/3425190850' target='_blank'> Llevame a Whatsapp</a>
                    </div>
                }
            </div>
        </div>
    )
}
export default ContactContent