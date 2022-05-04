import React from 'react';
import './Info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-regular';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Name() {
    return(
        <div>
            <h2 className='my-name'>Ignacio Elías Rosner</h2>
            <h4 className='my-job'>Web Developer</h4>
            <h6 className='my-website'><a href='https://github.com/roznerx' target={'blank'}>https://github.com/roznerx</a></h6>
        </div>
    );
};

function Buttons() {
    return(
        <div className='btn-container'>
            <button className='mail-btn'><FontAwesomeIcon icon={faEnvelope} className='envelope'/>Email</button>
            <button className='linkedin-btn'>
                <a href='https://www.linkedin.com/in/ignacio-elias-rosner/' target={'blank'}><FontAwesomeIcon icon={faLinkedin} className='linkedin'/>LinkedIn</a>
            </button>
        </div>
    );
};

function AboutInterests() {
    return(
        <div className='about-interests-container'>
            <h3 className='info-title'>About</h3>
            <h5 className='info-text'>I'm a self-taught web developer that has a passion for knowledge and new technologies. I'm looking for a place
            where I can grow both as a person and as a professional, trying to make the world a better place.</h5>
            <h3 className='info-title'>Interests</h3>
            <h5 className='info-text'>Programming. Making music. History scholar. Writing horror fiction. Playing videogames. Reading and watching films.</h5>
        </div>
    );
};

function Info() {
    return(
        <div className='info-container'>
            <Name />
            <Buttons />
            <AboutInterests />
        </div>
    );
};

export default Info;