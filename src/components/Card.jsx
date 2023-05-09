import React from 'react';
// import * as Datas from '../assets/Assets';
import Data from '../Data.js';
import * as Assets from '../assets/Assets.js';
import '../styles/Card.css';

const Card = () => {
    return (
        <main className='card'>
            <img src={Data[0].imageUrl} alt="" className='card--image' />
            <article className='card--data'>
                <section className='card--info'>
                    <img className='card--googleMap-logo' src={Assets.googleMapIcon} alt=""/>
                    <div className='card--location secondary'>{Data[0].location}</div>
                    <u className='card--location--googleData'>View on Google Maps</u>
                </section>
                <h2 className='card--travel-destiny secondary'>{Data[0].title}</h2>
                <span className='card-dateStatement secondary'>{Data[0].startDate} - {Data[0].endDate}</span>
                <p className='card--description secondary'>{Data[0].description}</p>
            </article>
        </main>
    );
}

export default Card;