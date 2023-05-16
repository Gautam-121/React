const validation = (value) => {

    const error = {}

    const email_pattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/

    const password_pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,15}$/

    if(value.name == ""){
        error.email = "Name shuld not empty"
    }
    else{
        error.email = ""
    }

    if(value.email == ""){
        error.email = "Email shuld not empty"
    }
    else if(!email_pattern.test(value.email)){
        error.email = "Please Enter Valid Email"
    }
    else{
        error.email = ""
    }

    if(value.password == ""){
        error.password = "password shuld not empty"
    }
    else if(!password_pattern.test(value.password)){
        error.password = "Pasword is not match"
    }
    else{
        error.password = ""
    }

    return error
}

export default validation