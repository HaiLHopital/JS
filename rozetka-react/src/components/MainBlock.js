import React from 'react'

import Item from './SellingItem'

const products=[{id:0, name:"kekw", category:"keyboard",price:120,params:"black"},
{id:1, name:"lulw", category:"monitor",price:120,params:"full hd"},
{id:2, name:"Kappa", category:"keyboard",price:120,params:"white"},]

function MainBlock(){
    return(
        <div className="displayedItems">
            {products.map(item=><Item {...item}/>)}
          </div>
        
    )
}

export default MainBlock;