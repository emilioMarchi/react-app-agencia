import React, {useEffect} from 'react'

import './styles.css'
export default function ServicesBanner() {

return(
    <div className='services-banner' id='services'>
        <div id="carouselExampleControls" className="carousel slide col" data-bs-ride="carousel" data-bs-interval="3800">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='w-100 item'>
                        <img className='col-4-md' src='./img/prueba.webp' />
                        <div className='text col-8-md'>
                            <h2>Desarrollo Web</h2>
                            <div className='line'></div>
                            <h3>Desarrollamos el sitio web de tu marca, la tienda online de tu tienda, o la plataforma digital que tu marca necesite</h3>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='w-100 item'>
                        <img className='col-4-md' src='./img/company.png' />
                        <div className='text col-8-md'>
                            <h2>Marketing Digital</h2>
                            <div className='line'></div>
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</h3>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='w-100 item'>
                        <img className='col-4-md' src='./img/pruebapng.png' />
                        <div className='text col-8-md'>
                            <h2>Contenido de Marca</h2>
                            <div className='line'></div>
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h3>
                            <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industryo.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}
