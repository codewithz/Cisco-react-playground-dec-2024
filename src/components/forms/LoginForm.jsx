import React, { useState } from 'react'
import { loginHandler } from './loginHandler'

export default function LoginForm() {

    const defaultAccount={username:"",password:""}
    const [account,setAccount]=useState(defaultAccount)

    const handleSubmit =(event)=>{
        event.preventDefault()
        console.log("Form Submitted")
        loginHandler(account);
    }

    // const handleUsernameChange= (event)=>{
    //     const username=event.target.value
    //     const id=event.target.id;

    //     console.log("Id:",id)
    //     console.log("Value:",username)
    //     // setAccount(getUpdatedAccount(account))

    //     // function getUpdatedAccount(prevState){
    //     //     return {...prevState,username:username}
    //     // }

    //     setAccount((prevState)=>({...prevState,username:username}))

    //     console.log("State:",account)
    // }

    // const handlePasswordChange= (event)=>{
    //     const password=event.target.value
        
    //     const id=event.target.id;

    //     console.log("Id:",id)
    //     console.log("Value:",password)

    //     setAccount((prevState)=>({...prevState,password:password}))

    //     console.log("State:",account)
    // }

    const handleChange= (event)=>{
        
        
        const id=event.target.id;
        const value=event.target.value

        console.log("Id:",id)
        console.log("Value:",value)
        const updatedValues={[id]:value}
        setAccount((prevState)=>({...prevState,...updatedValues}))

        console.log("State:",account)
    }

  return (
    <div className="container">
    <h1>Login</h1>
    <form onSubmit={handleSubmit} className="container w-50 m-auto">
        <div className="form-group mt-3">
            <label htmlFor="username">Username</label>
            <input  
                id="username" 
                type="text" 
                className="form-control mt-2"
                onChange={handleChange}
                />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                id="password" 
                type="text" 
                className="form-control mt-2"
                onChange={handleChange}
                />
        </div>
        <button className="btn btn-warning btn-sm m-2">Login</button>
    </form>

</div>
  )
}
