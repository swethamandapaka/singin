import React,{useState} from "react"
export const Login =(props)=>{
    const [email,setEmail] = useState('');
    const[pass,setPass] = useState('');
    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div><center>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">email:</label><input  type="email"name='email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
        <label htmlFor="pass">password:</label><input type="password"name='password' value={pass} onChange={(e)=>setPass(e.target.value)}/><br/>
        <button type="submit">login</button>
          </form></center>
          <button onClick={()=>props.onFormSwitch("register")}>Don't have an account Register here</button></div>
           
               );
}
export default Login;
/*import React, { useState } from "react";
import "../src/register"
export default function login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }

  function handleSubmit(event) {

    event.preventDefault();

  }

  return (

    <div className="Login">

      <Form onSubmit={handleSubmit}>

        <Form.Group size="lg" controlId="email">

          <Form.Label>Email</Form.Label>

          <Form.Control

            autoFocus

            type="email"

            value={email}

            onChange={(e) => setEmail(e.target.value)}

          />

        </Form.Group>

        <Form.Group size="lg" controlId="password">

          <Form.Label>Password</Form.Label>

          <Form.Control

            type="password"

            value={password}

            onChange={(e) => setPassword(e.target.value)}

          />

        </Form.Group>

        <Button block size="lg" type="submit" disabled={!validateForm()}>

          login

        </Button>

      </Form>

    </div>

  );

}
export default login;*/