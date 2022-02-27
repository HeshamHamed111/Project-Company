import React, {useState} from 'react';
import styling from './model.module.css';
import Form from '../Form/Form';


const AddUser = ({show, saveDataUser, hideModel}) => {

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[birthday, setBirthday] = useState("");
    const[role, setRole] = useState("");


// THis function prevent reload on submit save and send new data of states as parameter to saveDataUser function to add it to  basic state
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(username);
        saveDataUser({
            id: Math.round(Math.random() * 100),
            username,
            password,
            birthday,
            role
        });
        setUsername('');
        setPassword('');
        setBirthday('');
        setRole('');
    };
    // this function remove all vales of inputs in form add user
    const onResetHandler = () => {
        setUsername('');
        setPassword('');
        setBirthday('');
        setRole('');
    }

 return ( <div className={`${styling.overlay} ${show ? `${styling.show}` : null}`}>
        <form onSubmit={onSubmitHandler}>
        <h2 style={{textAlign: "center"}}>Add User</h2>
        <Form.Controller>
                <label htmlFor="username">Username</label>
                <input id='username' type="text" className="form-control" value={username} placeholder="Enter Username..." onChange={(e) => setUsername(e.target.value)} />   
            </Form.Controller> 
            <Form.Controller>
                <label htmlFor="password">Password</label>
                <input type="text" className="form-control" id='password' value={password} placeholder="Enter Password..." onChange={(e) => setPassword(e.target.value)}/>   
            </Form.Controller> 
            <Form.Controller>
                <label htmlFor="birthday">Birthday</label>
                <input type="text" id='birthday' className="form-control" value={birthday} placeholder="Enter Birthday..." onChange={(e) => setBirthday(e.target.value)}/>   
            </Form.Controller>             
            <Form.Controller>
                <label htmlFor="role">Role</label>
                <input type="text" value={role} id='role' className="form-control" placeholder="Enter Role..." onChange={(e) => setRole(e.target.value)}/>   
            </Form.Controller>                            
            <div style={{marginTop: "20px", textAlign: "right"}}>
                <button type="submit" className="btn btn-primary" style={{margin: "auto 5px"}}onClick={() => hideModel()}>Save</button>
                <button type="reset" className="btn btn-danger" onClick={() => onResetHandler()}>Reset</button>    
            </div>        
        </form>
       
    </div> );
}
export default AddUser;