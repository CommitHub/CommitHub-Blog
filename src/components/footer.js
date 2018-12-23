import React from 'react'
import { 
    FaTwitter, 
    FaLinkedin,
    FaDev,
    FaGithub,
    FaEnvelope 
} from 'react-icons/fa'
import { IconContext } from "react-icons";

import './styles/footer.scss';

const Footer = () => (
    <div className='footer'>
        <h2>Contact</h2>
        <div className='btn-container'>
            <IconContext.Provider value={{className: 'twitter-btn'}}>
                <FaTwitter />
            </IconContext.Provider>
            <IconContext.Provider value={{className: 'linkedIn-btn'}}>
                <FaLinkedin />
            </IconContext.Provider>
            <IconContext.Provider value={{className: 'dev-btn'}}>
                <FaDev />
            </IconContext.Provider>
            <IconContext.Provider value={{className: 'github-btn'}}>
                <FaGithub />
            </IconContext.Provider>
            <IconContext.Provider value={{className: 'contact-btn'}}>
                <FaEnvelope />
            </IconContext.Provider> 
        </div>
        <h4>{`${String.fromCharCode(169)} Commithub 2017`}</h4>    
    </div>
);

export default Footer;