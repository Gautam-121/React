import { useState } from "react"
import Teli_logo from "../../asset/teli_image.png"
import {validation} from "../../utils/validation"
import "./contact.css"
import { sendData } from "../../utils/serverCall"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = ()=>{

    const [user , setUser] = useState({
        name : "",
        email : "",
        message : ""
    })

    const [error , setError] = useState({})

    const changeHandler = (event)=>{
        const name = event.target.name
        const value = event.target.value
        setUser({...user , [name] : value })
    }

    const submitHandler = (event)=>{
        event.preventDefault()
        setError(validation(user))
    }

    if(error?.name === "" && error?.email === "" && error.message===""){
        console.log("Gauatanm")
        toast.success("Thanks for contacting MenuHub , We will reply ASAP")
        setError({})
    }

    return(
      <div  className="contact-container"> 
        <img 
        src={Teli_logo}
        alt="This is Contact Image"
        className="teli-contact" 
        />
        <form onSubmit={submitHandler}>
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
            {error?.message && <p className="text-danger">*{error.message}</p>}
            </div>
            <input type="submit"  value="Submit" className="contact-btn"/>
        </div>
       </form>
       <ToastContainer
       hideProgressBar
       autoClose={200}
       />
      </div>
    )
}

export default Contact

