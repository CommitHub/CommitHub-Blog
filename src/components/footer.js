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
    <div>
        <p>Footer</p>
        <div>
            <IconContext.Provider value={{ size: '2em', className: 'twitter-btn', color: 'white'}}>
                <FaTwitter />
            </IconContext.Provider>
            
            <FaLinkedin />
            <FaDev />
            <FaGithub />
            <FaEnvelope />
        </div>    
    </div>
);

export default Footer;