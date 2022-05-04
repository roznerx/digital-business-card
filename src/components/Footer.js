import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faStackOverflow } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return(
        <div className='social-container'>
            <a href='https://twitter.com/roznerx/' target={'blank'}><FontAwesomeIcon icon={faTwitter} className='twitter'/></a>
            <a href='https://instagram.com/roznerx/' target={'blank'}><FontAwesomeIcon icon={faInstagram} className='instagram'/></a>
            <a href='https://stackoverflow.com/users/14668827/roznerx' target={'blank'}><FontAwesomeIcon icon={faStackOverflow} className='stackoverflow'/></a>
            <a href='https://github.com/roznerx/' target={'blank'}><FontAwesomeIcon icon={faGithub} className='github'/></a>
        </div>
    );
};