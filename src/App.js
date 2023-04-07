import React,{ useState } from 'react';
/*import logo from './logo.svg';*/
import "../src/App.css"
import {Login} from "./login";
import {Register} from  "./register";
function App() {
  const [currentForm,setcurrentForm] = useState('Login');
  const toggleForm = (formname)=>{
    setcurrentForm(formname);
  }
  return (
   <div className='app'>
      {
        currentForm === 'Login' ? <Login onFormSwitch={toggleForm}/> :<Register onFormSwitch={toggleForm}/>
      }
    </div>
    
  );
  }
  export default App;