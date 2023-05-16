import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import validation from "./errorValidation/registerValidation.js"

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

        setUser({ ...user, name: value })
    }

    const submitHandler = (event) => {
        event.preventDefault()
        setError(validation(value))
    }

    if (error.name == "" && error.email == "" && error.password == "") {

        const data = getData()

        if (data.success) {
            alert("Register Successful")
            navigate("/login")
        }
        else {
            console.log(data.message)
        }
    }

    async function getData() {

        const data = await fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                "context-type": 'apllication/json'
            },
            body: JSON.stringify(value)
        })
        return data
    }


    return (
        <div>
            <div>
                <form action="" onSubmit={submitHandler}>
                    <div>
                        <input
                            type="text"
                            className="register-name"
                            name="name"
                            placeholder="Name"
                            onChange={changeInput}
                        />
                        {error.name && <span className="text-danger">{error.name}</span>}
                    </div>
                    <div>
                        <input
                            type="email"
                            className="register-email"
                            name="email"
                            placeholder="Email"
                            onChange={changeInput}
                        />
                        {error.email && <span className="text-danger">{error.email}</span>}

                    </div>
                    <div>
                        <input
                            type="password"
                            className="register-pasword"
                            name="password"
                            placeholder="Password"
                            onChange={changeInput}
                        />
                        {error.password && <span className="text-danger">{error.password}</span>}
                    </div>
                    <button type='submit' className="btn btn-success w-100 rounded-0"><strong>Sign up</strong></button>
                    <p>You are agree to our terms and policies</p>
                    <Link to="/" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">Login</Link>
                </form>
            </div>
        </div>
    )
}

export default Register