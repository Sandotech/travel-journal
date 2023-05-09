import React from 'react';
import * as images from '../assets/Assets.js';
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <section>
                <img src={images.WorldWideWebIcon} alt="" className='navbar--icon' />
                <span className='navbar--text'>my travel journal.</span>
            </section>
        </nav>
    );
}

export default Navbar;