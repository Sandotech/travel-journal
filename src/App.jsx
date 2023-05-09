import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';


/* 
  Requirements of the Project 
    - Data array in a separate .js file:
      - title,location, Google Maps link, end date, description, image URL
    - Use .map() and props
    - Style and polished 
  */

function App() {
  return (
    <>
      <Navbar />
      <Card />
    </>
  )
}

export default App
