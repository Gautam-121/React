import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {validation} from "../../../utils/validation"
import {sendData} from "../../../utils/serverCall.js"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./register.css"


const Register =  () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState({})
    const navigate = useNavigate()

    const changeInput = (e) => setUser({ ...user, [e.target.name]: e.target.value })
    
    const submitHandler =  (event) => {
        event.preventDefault()
        setError(validation(user))
    }

    async function getResData(){
    
        const data = await sendData(user , "post" , "register")

        if(data.success){
            toast.success("Register Successully")
            setTimeout(()=>{
                navigate("/login")
            },1500)
            return
        }
        setError({message : data.message})
    }

    if(error?.name === "" && error?.email === "" && error?.password === ""){
        getResData()
    }

    return (
        <div className="outer-login">
        <div className="login-page">
            <h2 className="login-header">SignIn</h2>
            <form onSubmit={submitHandler} >
            <div>
                    <input
                        type="text"
                        className="login-property"
                        placeholder="Name"
                        name="name"
                        value={user.name}
                        onChange={changeInput} 
                    />
                    {error.name && <p className="text-danger">*{error.name}</p>}
                </div>
                <div>
                    <input
                        type="text"
                        className="login-property"
                        placeholder="Email"
                        name="email"
                        value={user.email}
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
                        value={user.password}
                        onChange={changeInput} 
                    />
                 {error.password && <p className="text-danger">*{error.password}</p>}
                </div>
                <button className="login-btn" type="submit">Sign up</button><br/><br />
                {error.message && <p className="text-danger">*{error.message}</p>}
                <hr/>
                <span> Do not have an account ?</span>
               <Link to={"/login"}><button className="signIn-button">login</button></Link>
            </form>
        </div>
        <ToastContainer
        hideProgressBar
        />
    </div>
    )
}

export default Register