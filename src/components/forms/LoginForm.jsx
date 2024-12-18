import React, { useState } from 'react'
import { loginHandler } from './loginHandler'

export default function LoginForm() {

    const defaultAccount = { username: "", password: "" }
    const [account, setAccount] = useState(defaultAccount)
    const [errors, setErrors] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        const errorsDuringSubmit=validate();
        setErrors(errorsDuringSubmit)
        
        
        if (errorsDuringSubmit) {
            return;
        } else {
            loginHandler(account);
        }
    }

    const validate = () => {

        const formErrors={}

        if(account.username.trim()===""){
            formErrors.username="Username is required"
        }
        if(account.password.trim()===""){
            formErrors.password="Password is required"
        }
        

        return Object.keys(formErrors).length === 0 ?null:formErrors;
    }

    


    const handleChange = (event) => {

        // const id=event.target.id;
        // const value=event.target.value

        const { id, value } = event.target;

        console.log("Id:", id)
        console.log("Value:", value)
        const updatedValues = { [id]: value }
        setAccount((prevState) => ({ ...prevState, ...updatedValues }))

        const errorMessage=validateProperty({id,value});
        if(errorMessage){
            setErrors((prevState)=>({...prevState,[id]:errorMessage}))
        }else{
            delete errors[id]
        }

        // console.log("State:",account)
    }

    const validateProperty= ({id,value})=>{
        if(id ==="username"){
            if(value.trim()===""){
                return "Username is blank"
            }
        }

        if(id ==="password"){
            if(value.trim()===""){
                return "Password is required"
            }
        }


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
                   {(errors && errors.username) &&  <div className='alert alert-danger'>Username is empty</div>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="text"
                        className="form-control mt-2"
                        onChange={handleChange}
                    />
                     {(errors && errors.password) &&  <div className='alert alert-danger'>Password  is empty</div>}
                </div>
                <button className="btn btn-warning btn-sm m-2">Login</button>
            </form>

        </div>
    )
}
