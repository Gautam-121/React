import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {validation} from "../utils/helper"

const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState({})

    const navigate = useNavigate()

    const changeInput = (event) => {

        const name = event.target.name
        const value = event.target.value

        setUser({ ...user, [name]: value })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setError(validation(user))
    }

    if (error?.name?.length == 0 && error?.email?.length == 0 && error?.password?.length == 0) {

        const data = getData()

        if (data.success) {
            alert("Register Successful")
            navigate("/login")
        }
        else {
            console.log('which page' , data)
        }
    }

    async function getData() {

        const data = await fetch("http://localhost:4000/api/v1/signIn", {
            method: "post",
            headers: {
                "context-type": 'apllication/json'
            },
            body: JSON.stringify(user)
        })
        
        const json = await data.json()

        return json
    }


    return (
        <div className="signin-container">
            <h2 className="signin-title">Sign In</h2>
            <form action="" className="signin-form" onSubmit={submitHandler}>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={changeInput}
                        className="signin-input"
                    />
                    {error.name && <p className="text-danger">*{error.name}</p>}
                </div>
                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={changeInput}
                        className="signin-input"
                    />
                    {error.email && <p className="text-danger">*{error.email}</p>}

                </div>
                <div>
                    <input
                        type="password"
                        className="signin-input"
                        name="password"
                        placeholder="Password"
                        onChange={changeInput}
                    />
                    {error.password && <p className="text-danger">*{error.password}</p>}
                </div>
                <button type='submit'  className="signin-button"><strong>Sign up</strong></button>
            </form>
        </div>
    )
}

export default Register