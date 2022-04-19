import React, {useEffect} from 'react'

import './styles.css'
export default function ServicesBanner() {

return(
    <div className='services-banner'>
        <div id="carouselExampleControls" className="carousel slide col" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className='w-100 item'>
                        <img className='col-6' src='./img/prueba.webp' />
                        <div className='text col-6'>
                            <h2>Desarrollo Web</h2>
                            <div className='line'></div>
                            <h3>Desarrollamos el sitio web de tu marca, la tienda online de tu tienda, o la plataforma digital que tu marca necesite</h3>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='w-100 item'>
                        <img className='col-6' src='./img/pruebapng.png' />
                        <div className='text col-6'>
                            <h2>Marketing Digital</h2>
                            <div className='line'></div>
                            <h3>Descripcion de prueba</h3>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className='w-100 item'>
                        <img className='col-6' src='./img/design.webp' />
                        <div className='text col-6'>
                            <h2>Contenido de Marca</h2>
                            <div className='line'></div>
                            <h3>Descripcion de prueba</h3>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
)
}
