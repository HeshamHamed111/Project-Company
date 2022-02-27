import React, {useState} from 'react';
import styling from './Card.module.css';
import Form from '../Form/Form';


const Edituser = ({edit, Edithandler, toggleEdit, name, pass, birth, rol, index, EditHandler, indexCliced}) => {
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[birthday, setBirthday] = useState("");
    const[role, setRole] = useState("");


    const onSubmitEdit = (e) => {
        e.preventDefault();
        EditHandler(indexCliced, {
            id: Math.round(Math.random() * 100),
            username: username,
            password: password,
            birthday: birthday,
            role: role
        });
        toggleEdit();
    }
    console.log(index);

    return ( 
        <div className={styling.edituser} style={{display: `${edit ? 'block' : 'none'}`}}>

        <div className={styling.overout} onClick={() => toggleEdit()}></div>
        
        <div className={styling.formover}>
        <form onSubmit={(e) => onSubmitEdit(e)}>
        <h2 style={{textAlign: "center"}}>Edit {name}</h2>
            <Form.Controller>
        <label htmlFor="nameedit">Username</label>
        <input id='nameedit' type="text" className="form-control" defaultValue={name} placeholder="Enter Username..." onChange={(e) => setUsername(e.target.value)}/>   
            </Form.Controller> 
        <Form.Controller>
            <label htmlFor="passwordedit">Password</label>
            <input type="text" className="form-control" id='passwordedit' defaultValue={pass} placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)}/>   
        </Form.Controller> 
        <Form.Controller>
            <label htmlFor="birthdayedit">Birthday</label>
            <input type="text" id='birthdayedit' className="form-control" defaultValue={birth} placeholder="Enter Birthday..."  onChange={(e) => setBirthday(e.target.value)}/>   
        </Form.Controller>             
        <Form.Controller>
            <label htmlFor="roleedit">Role</label>
            <input type="text" id='roleedit' className="form-control" defaultValue={rol} placeholder="Enter Role..." onChange={(e) => setRole(e.target.value)}/>   
        </Form.Controller>   
        <div style={{textAlign: "right"}}>
            <button type="submit" className="btn btn-primary">Update</button>
        </div>           
        </form>
        </div>
        </div>
     );
}
 
export default Edituser;