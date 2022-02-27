import React, {useState} from 'react';
import styling from './Card.module.css';

import Edituser from './Edituser';

const Card = ({nameList, deletefunc, EditHandler}) => {

    const [edit, setEdit] = useState(false);

    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [birth, setBirth] = useState('');
    const [rol, setRole] = useState('');
    const [indexCliced, setIndexClicked] = useState('');
 

    // This function prevent reload on submit of edit and store list of user in the states to store as default value in inputs form edit
    // and send index of user as props to Edituser component 
    const Edithandler = (e, index) => {
        e.preventDefault();
        setEdit(!edit);
        // Edituser(index);
        setName(nameList[index].username);
        setPass(nameList[index].password);
        setBirth(nameList[index].birthday);
        setRole(nameList[index].role);
        setIndexClicked(index);
    }
    // this function toogle state edit to show edituser component or hide by click on Edit 
    const toggleEdit = () => {
        setEdit(!edit);
    }


    const nameItem = nameList.map(({id, username, password, birthday, role}, index) => {
        
        return (
            <React.Fragment>
            <div className="col-lg-4 col-md-6 col-12" key={id}>

                <div className={styling.card}>
                <div>Username: {username}</div>
                <div>Password: {password}</div>
                <div>Birthday: {birthday}</div>
                <div>Role: {role}</div>
                <div style={{textAlign: "right"}}>
                <button className="btn btn-danger" onClick={() => deletefunc(id)}>Delete</button>
                <button className="btn btn-primary" style={{marginLeft: "5px"}} onClick={(e) => Edithandler(e, index)}>Edit</button>
                </div> 
                </div>
                <Edituser edit={edit} Edithandler={Edithandler} toggleEdit={toggleEdit} index={index} indexCliced={indexCliced}
                name={name} pass={pass} birth = {birth} rol={rol} EditHandler={EditHandler} />  
 
            </div>

        </React.Fragment>
        )  
    });


    return (
       <div>
       <div className="row">
       {nameItem}
        </div>       

       </div>

    )
}
export default Card;
