import React, {useState} from 'react';
import { confirm } from "react-confirm-box";
import styling from './App.module.css';
import Card from '../Card/Card';
import Filter from '../Filter/Filter';
import Model from '../Model/Model';
import AddUser from '../Model/AddUser';
import Login from '../Login/Login';

const App = () => {

  const [login, setLogin] = useState(true);
  const [admine, setAdmine] = useState('');

  const [filter, setFilter] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [state, setState] = useState ([
      {
        id: 1,
        username: "Hesham",
        password: "254558845645",
        birthday: "10/10/1997",
        role: "Front-End Developer"
      },
      {
        id: 2,        
        username: "Sameh",
        password: "53555665456",
        birthday: "4/5/1995",
        role: "Back-End Developer"
      },
      {
        id: 3,        
        username: "Mahmoud",
        password: "8545756654554",
        birthday: "20/8/1994",
        role: "Software Enginering"
      },
      {
        id: 4,
        username: "Ramy",
        password: "764455455456",
        birthday: "18/6/1992",
        role: "Mobile Application Developer"
      },
      {
        id: 5,
        username: "Alaa",
        password: "877759996555",
        birthday: "26/8/1994",
        role: "Flutter Developer"
      }
    ]);

    // This function Take Data From Form Add User And Push it in  The State Of Users
    // it's run when Admine enter Form Add user and click on button add

    const saveDataUser = (data) => {
      setState((prevState) => {setState([...prevState, data])});
      console.log(data);
    }

    // This function Delete User When Admine Click on Button Delete 
    // It's run when admine click on button delete and show him message pop up to ensure delete user

  const deleteHandler = async (clickIndex) => {
    const result = await confirm("Are you sure delete this user?");
    if (result) { 
      const dleteOberation = state.filter((el) => el.id !== clickIndex);
      console.log(dleteOberation);
      
      setState(dleteOberation);
    }
    console.log(clickIndex);

  }
  // This function edit the state by copy the old state and modify the data of state and push it in  the state
  // It's run when the admine click on Edit user

  const EditHandler = (index, data) => {
    let newArr = [...state]; 
    newArr[index] = data;

    setState(newArr);

  }

// this function Store Input Value of search user in state (filter) 
  const filterName = (name) => {    
      setFilter(name);
  }

  // this function do filteration to the state and show state that includes the value of state (filter)
  const stateReturn = () => {

    if(filter.length !== 0) {
      return state.filter((el) => el.username.includes(filter));
    }
    return state;
  }

  // this function Store Username of Admine to Welcome her in List Of Users 
  const admineName = (name) => {
    setAdmine(name);
  }

  // This Function check if admine enter your username and password and open her list of users
  const logging = () => {
    setLogin(false);
  }
 
    
    return (
     
      <div className={styling.App}>
   
      <div className={`${login ? `${styling.out}` : `${styling.in}`}`}>
         <Model show={showModel} hideModel={()=> setShowModel(false)} saveDataUser = {saveDataUser} >
        <AddUser/>
        </Model>
        <h1>Hi {admine} :)</h1>
        <h3>List Of Users</h3>

        <div style={{textAlign: "center", marginBottom: "20px"}}>

        <button className="btn btn-primary" onClick={()=> setShowModel(true)}>Add New User</button>
        </div>

        <Filter filteration={filterName}/>
      
        <Card nameList={stateReturn()} deletefunc={deleteHandler} EditHandler={EditHandler} />
       
        
        </div>
        <div className={`${login ? `${styling.in}` : `${styling.out}`}`} >
          <Login logging = {logging} admineName = {admineName} />
        </div>
    </div>  
    );
  
}

export default App;