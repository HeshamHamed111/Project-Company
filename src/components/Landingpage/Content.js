import React from 'react';
import styling from  './Landing.module.css';
import {Link} from 'react-router-dom';

const Content = () => {
    return ( 
        <div className={styling.allContent}>
            <h3>Welcom To eStarUps</h3>
            <p>Elegant Bootstrap Template for Startups, Apps & more...</p>

            <button type="button" className={`btn btn-outline-primary ${styling.started}`}>Get Started</button>
            <div style={{margin: "50px auto"}}>
            <Link to="/" className={`btn btn-outline-success`}>Go to Login</Link>
            </div>

        </div>
     );
}
 
export default Content;