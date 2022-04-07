import React from 'react'
const $ = require('jquery')


export function Graphic(props) {

    return (
        <div className='graphic-table detail'>
            <div className='ruler'>
                <p>100</p>
                <div className='line'></div>
                <p>0</p>
            </div>
            {props.data.map((item)=>{
                
            
                return(
                    <div id={item.id} className='level'>
                        <div className='level-bar'>
                            <div style={{height: item.porcent +'%', bottom: -(100-item.porcent) + '%'}}  className='graph-bar'></div>
                        </div>
                            <h3 className='level-title'>{item.title}</h3>
                    </div>
                )
            })}
        </div>
    )
}