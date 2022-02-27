import React from 'react';
import Form from '../Form/Form';
import Landingpage from '../Landingpage/Landingpage';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import styling from './login.module.css'

const Login = ({admineName, logging}) => {
    
    // this function prevent reload on submit Login and invok logging function that enter admine to list of users
    const onSubmitHandel = (e) => {
        e.preventDefault();
        logging();
    }
    return ( 
        <Router>
        <Route exact path="/">
        <div className={styling.login}>
        <h2>Login Admin</h2>
        <form onSubmit={onSubmitHandel}>
            <Form.Controller>
                <label htmlFor="usernamelogin">Username</label>
                <input type="text" id="usernamelogin" className="form-control" onChange={(e) => admineName(e.target.value)}
                 />
            </Form.Controller>
            <Form.Controller>
                <label htmlFor="passwordlogin">Password</label>
                <input type="password" id="passwordlogin" className="form-control" />
            </Form.Controller>
            <button type="submit" className="btn btn-primary">Login</button>
        </form>
        <Link to ='/landingpage' className={`btn btn-success`} style={{margin: "50px auto"}}>Move To Landing Page</Link>
    </div>
        </Route>

       
        <Route path='/landingpage'>
            <Landingpage />
        </Route>
        </Router>


     );
}
 
export default Login;