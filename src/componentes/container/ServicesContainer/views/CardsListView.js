import React from 'react'

import Card from '../nodos/Card/Card'

const CardsListView = (props) => {

    const data = props.data

    return(
        <div className='cards-list'>
            {   
                data.map((item)=>{
                    return(
                        <Card key={item.id} data={item} />
                        )
                    })
                    
            }
        </div>
    )
}

export default CardsListView