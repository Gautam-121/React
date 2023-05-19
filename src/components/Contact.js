import { useState } from "react"
import Teli_logo from "../asset/teli_image.png"
import validationContact from "./errorValidation/validation"

const Contact = ()=>{

    const [user , setUser] = useState({
        name : "",
        email : ""
    })

    const [error , setError] = useState({hobbies : "cricket"})

    const changeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setUser({...user , [name] : value })
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        setError(validationContact(user))
    }

    if(error?.name?.length == 0 && error?.email?.length == 0){
        //setContactData()
    }

    async function setContactData(){
        const data = await fetch("http://localhost:4000/contact" , {
           method : "POST",
           headers : {
            "context-text" : "application/json"
           },
           body : JSON.stringify(user)
        })

        const json = await data.json()
        return json
    }


    return(
       <form className="contact-container" onSubmit={submitHandler}>
        <img 
        src={Teli_logo}
        alt="This is Contact Image"
        className="teli-contact" 
        />
        <div className="info-contact">
            <h1 className="heading-contact">Contact Us</h1>
            <div>
                <input 
                type="text" 
                placeholder="Name" 
                name = "name" 
                className="contact-name"
                onChange={changeHandler}
                />
                {error?.name && <p className="text-danger">*{error.name}</p>}
            </div>
            <div>
                <input 
                type="email" 
                placeholder="Email" 
                name = "email" 
                className="contact-name"
                onChange={changeHandler}
                />
              {error?.email && <p className="text-danger">*{error.email}</p>}
            </div>
            <div>
                <textarea 
                name="message" 
                id="" 
                cols=""
                rows="5" 
                className="contact-name" 
                onChange={changeHandler}
                placeholder="Type Your Message Here...."
                ></textarea>
            </div>
            <input type="submit"  value="Submit" className="contact-btn"/>
           {(error?.name?.length == 0 && error?.email?.length ==0) && <h3>Thanks for contacting MenuHub , We will reply ASAP</h3> }
        </div>
       </form>
    )
}

export default Contact