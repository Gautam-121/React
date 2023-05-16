import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import validation from "./errorValidation/LoginValidation"

const Login = () => {

    const [user, setUser] = useState({
        email: "gaua",
        password: "gaut"
    }
    )

    const [error , setError] = useState({})

    const navigate =  useNavigate()

    const changeInput = (event) => {

        const name = event.target.name
        const value = event.target.value

        setUser({ ...user, [name]: value })
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        setError(validation(error))
    }

    if(error.email == ""  && error.password == ""){

        const data =  getData()

        if(data.success){
            alert("Login Succesuful")
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
                <h2>SignIn</h2>
                <form onSubmit={submitHandler} >
                    <div>
                        <input
                            type="email"
                            className="login-email"
                            placeholder="Email"
                            name="email"
                            onChange={changeInput} 
                        />
                        {error.email && <span className="text-danger">{error.email}</span>}
                    </div>
                   
                    <div>
                        <input
                            type="password"
                            className="login-password"
                            placeholder="Password"
                            name="password"
                            onChange={changeInput} 
                        />
                     {error.password && <span className="text-danger">{error.password}</span>}
                    </div>
                    <button className="login-btn" type="submit"><strong>Login</strong></button><br />
                    <span>You are agree to our terms and policies</span><br />
                   <Link to={"/resgister"}><button>Create Account</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Login