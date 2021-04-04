import {Header, Categories, MainBlock} from '../components';


import React from 'react'

function Home(){
    return(
         <div>
        <Header />
        <div className="mainContainer">
          <Categories />
          <MainBlock />
        </div>
      </div> 
    )
}

export default Home