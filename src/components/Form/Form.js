import React from 'react';
import styles from './form.module.css'
const Form = (props) => {
    return ( 
        <form>{props.children}</form>
     );
}
const Controller = (props) => {
    return ( 
        <div className={styles.test}>{props.children}</div>
     );
}
 Form.Controller = Controller;

export default Form;

// This Is Custom helper component