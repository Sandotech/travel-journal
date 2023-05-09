import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './Data';


/* 
  Requirements of the Project 
    - Data array in a separate .js file:
      - title,location, Google Maps link, end date, description, image URL
    - Use .map() and props
    - Style and polished 
  */

function App() {
  const Cards = Data.map(item => 
    <Card
      key = {item.id}
      {...item}
    />
  )
  return (
    <>
      <Navbar />
      <div className='.cards-list'>{Cards}</div>
    </>
  )
}

export default App
