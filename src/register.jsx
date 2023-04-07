import React,{ useState } from 'react';
export const Register =(props)=>{
const [email,setEmail] = useState('');
const [pass , setPass] = useState('');
const [name, setName] =  useState('');
/*function register() {
  const[data,setData]=useState('login')
  const {username,email,password,confirmpassword}=data;
  const changeHandler = e =>{
    setData({...data,[e.target.name]:e.target.value})
  }*/
  const handleSubmit = (e) =>{
    e.preventDefault();
    /*if(username.length<=5){
   alert("username must contains 5 charecters");
    }
    else if(password !== confirmpassword){
    alert("passwords are not matching");
  }else if(password.length<=8){
    alert("password should contain atleast 8 charecters")
  }else{
    console.log(data)
  }*/
  console.log(email);
}
  return (
    
    <div><center>
      <form onSubmit={handleSubmit}>
      <label htmlFor='name'>Full-Name:</label><input  type="text" name='username' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
      <label htmlFor='email'>email:</label><input  type="email"name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
      <label htmlFor='pass'>password:</label><input  type="password"name='password' value={pass} onChange={(e)=>setPass(e.target.value)} /><br/>
      <label htmlFor='pass'>confirm-password:</label><input  type="password"name='confirmpassword' value={pass} onChange={(e)=>setPass(e.target.value)} /><br/>
        <button type='submit'>signup</button>
        </form></center>
        <button onClick={()=>props.onFormSwitch('login')}>Already have account ? login here</button></div>
  );
}


export default Register;
