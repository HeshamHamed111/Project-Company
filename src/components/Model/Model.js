import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import styling from './model.module.css';

import AddUser from './AddUser';
const Main = ({hide, show}) => {
        
        return ( <div className={`${styling.main} ${show ? `${styling.show}` : null}`} onClick={hide}></div> );
}

const Model = ({show, hideModel, saveDataUser}) => {
    return ( 

        <Fragment>
            {ReactDOM.createPortal(
                <Fragment>
                    <Main  hide={hideModel} show={show}/>
                    <AddUser hideModel={hideModel} show={show} saveDataUser={saveDataUser} />
                    </Fragment>, 
                    document.getElementById("modal")
            )}
        </Fragment>
           
    );
 
};
 
export default Model;