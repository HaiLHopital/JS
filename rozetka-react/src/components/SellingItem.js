import React from 'react'

function Item({id, category, name, price, params}){
    return(
        <div className="sellingItem">
            <h2>{category}</h2>
            <h3>{name}</h3>
            <h3>{price}</h3>
            <h4 className="params">{params}</h4>
        </div>
    )
}

export default Item