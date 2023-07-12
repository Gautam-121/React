import { useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import {validation} from "../../../utils/validation"
import { sendData } from "../../../utils/backendCall"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {setCookie , getCookie , removeCookie} from "../../../utils/cookie"
import "./login.css"



const Login = () => {

    const [user, setUser] = useState({
        email: "",
        password: ""
    })

    const [error , setError] = useState({})

    const navigate =  useNavigate()

    const changeInput = (event) => setUser({ ...user, [ event.target.name]: event.target.value})
    
    const submitHandler = (event)=>{
        event.preventDefault()
        setError(validation(user))
    }

    async function getResData(){
    
        const data = await sendData(user , "post" , "login")

        console.log("login" , data)

        if(data.success){

            removeCookie("token")
            toast.success("Login Successully")
            setCookie("token" , data.token)

            setTimeout(()=>{
                navigate("/")
                },1500)

            return
        }

        setError({message : data.message})
    }

    if(error?.email == ""  && error?.password == ""){
        getResData()
    }

    return (
        <>
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
                    <input type="submit" value="Login" className="login-btn" /><br/><br />
                    {error.message && <p className="text-danger">*{error.message}</p>}
                    <hr/>
                    <span>Do not have an account ?</span>
                   <Link to={"/signIn"}><button className="signIn-button">Sign up</button></Link>
                </form>
            </div>
        </div>
        <ToastContainer
          hideProgressBar
        />
        </>
    )
}

export default Login