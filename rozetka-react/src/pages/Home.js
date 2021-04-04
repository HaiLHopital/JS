import Header from '../components/Header';
import Categories from '../components/Categories';
import MainBlock from '../components/MainBlock';


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