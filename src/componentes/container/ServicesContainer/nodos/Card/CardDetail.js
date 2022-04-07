import React from 'react'

import './Card.css'

export default function CardDeatail(props) {
    const item = props.data
    return(
            <div className='services-card-content'>
                <div className='header-card'>  
                    <img src={item.img} />
                </div>
                <div className='body-card'>
                    <h3>{item.title}</h3>
                    {
                        (()=>{
                            const items = item.itemDescription
                            return(
                                <div>
                                    {
                                        items.map((item)=>{
                                            return(<h4>{item}</h4>)
                                        })
                                    }
                                </div>
                            )
                        })()
                    }
                </div>
            </div>
    )
}