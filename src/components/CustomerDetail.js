import { useState } from "react"

const customerDetail = ()=>{

    const [user , setUser] = useState({
        name : "",
        email : "",
        password : ""
    })

    const inputHandler = (e)=>{
        setUser({...user , [e.target.name] : e.target.value})
    }

    const submitHandler = async (e)=>{
        e.preventDefault()

        const data = await fetch("http://localhost:3000/register" , {
            method : "post",
            headers : {
                "Context-Text" : "application/json"
            },
            body : json.stringify()
        })
    }

    return(
        <div>
            <form action="" onSubmit={submitHandler}>
                <div>
                    <input 
                    type="text" 
                    placeholder="Enter Name"
                    value={user.name}
                    />
                </div>
                <div>
                    <input 
                    type="text" 
                    placeholder="Enter Name"
                    value={user.name}
                    onChange={inputHandler}
                    name="name"
                    />
                </div>
                <div>
                    <input 
                    type="email" 
                    placeholder="Enter Name"
                    value={user.name}
                    onChange={inputHandler}
                    name="email"
                    />
                </div>
                <div>
                    <input 
                    type="password" 
                    placeholder="Enter Name"
                    value={user.name}
                    onChange={inputHandler}
                    password = "password"
                    />
                </div>
                <button type="Submit">Submit</button>
            </form>
        </div>
    )
}