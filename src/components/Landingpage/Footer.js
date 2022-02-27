import React from "react";
import styling from  './Landing.module.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAppleAlt} from  '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return ( 
        <div className={styling.allfooter}>
            <div className={styling.social}>
            <p>app store</p>
            <p>google play</p>
            <p>windows</p>
            </div>
        </div>
     );
}
 
export default Footer;