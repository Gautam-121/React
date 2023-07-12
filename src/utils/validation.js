export const validation = (value) => {

    const error = {}

    const email_pattern = /^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/

    const password_pattern = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&])[a-zA-Z0-9@#$%&]{8,15}$/

    if(value?.name?.length == 0){
        error.name = "Name should not be empty"
    }
    else
    {
        error.name = ""
    }

    if(value?.email?.length == 0){
        error.email = "Email should not be empty"
    }
    else if(!email_pattern?.test(value?.email)){
        error.email = "Please Enter Valid Email"
    }
    else
    {
        error.email = ""
    }

    if(value?.password?.length == 0){
        error.password = "password should not be empty"
    }
    else if(!password_pattern?.test(value?.password)){
        error.password = "Paaword should min 8 character"
    }
    else
    {
        error.password = ""
    }
    if(value?.message?.length == 0){
        error.message = "message should not be empty"
    }
    else
    {
        error.message = ""
    }

    return error
}
