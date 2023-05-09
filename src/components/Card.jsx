import React from 'react';
// import * as Datas from '../assets/Assets';
// import Data from '../Data.js';
import * as Assets from '../assets/Assets.js';
import '../styles/Card.css';

const Card = (props) => {
    return (
        <main className='card'>
            <img src={props.imageUrl} alt="" className='card--image' />
            <article className='card--data'>
                <section className='card--info'>
                    <img className='card--googleMap-logo' src={Assets.googleMapIcon} alt=""/>
                    <div className='card--location secondary'>{props.location}</div>
                    <a href={props.googleMapsUrl} target='_blank' className='card--location--googleData'>View on Google Maps</a>
                </section>
                <h2 className='card--travel-destiny secondary'>{props.title}</h2>
                <span className='card-dateStatement secondary'>{props.startDate} - {props.endDate}</span>
                <p className='card--description secondary'>{props.description}</p>
            </article>
        </main>
    );
}

export default Card;