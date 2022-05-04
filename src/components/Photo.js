import React from 'react';
import './Photo.css';
import ProfilePic from '../images/ignacio-elias-rosner.png'

export default function Photo() {
    return(
        <img className='my-img' src={ProfilePic} alt='Ignacio Elías Rosner'/>
    );
};
