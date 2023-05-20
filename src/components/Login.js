import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import {validation} from "../utils/helper"

const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [error , setError] = useState({})

    const navigate =  useNavigate()

    const changeInput = (event) => {

        const name = event.target.name
        const value = event.target.value

        setUser({ ...user, [name]: value })
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        setError(validation(user))
    }

    if(error?.email?.length == 0  && error?.password?.length == 0){

        const data =  {success : true }

        if(data.success){
            // alert("Login Succesuful")
            navigate("/")
        }
        else{
            console.log(data.error)
            alert("No User resgister , Please register Your account")
        }
    }

    async function getData(){
        const data =  await fetch("http://localhost:4000/login" , {
            method : "POST",
            headers : {
                "context-type" : "application/json"
            },
            body : JSON.stringify(user)
        })
        return data
    }
    
    return (
        <div className="outer-login">
            <div className="login-page">
                <h2 className="login-header">SignIn</h2>
                <form onSubmit={submitHandler} >
                    <div>
                        <input
                            type="email"
                            className="login-property"
                            placeholder="Email"
                            name="email"
                            onChange={changeInput} 
                        />
                        {error.email && <p className="text-danger">*{error.email}</p>}
                    </div>
                    <div>
                        <input
                            type="password"
                            className="login-property"
                            placeholder="Password"
                            name="password"
                            onChange={changeInput} 
                        />
                     {error.password && <p className="text-danger">*{error.password}</p>}
                    </div>
                    <input type="submit" value="Login" className="login-btn" /><br/>
                    <span>You are agree to our terms and policies</span>
                   <Link to={"/signIn"}><button className="signIn-button">Create Account</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Login