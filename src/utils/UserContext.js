import { createContext } from "react";

const UserContext = createContext({
    loginUser : false,
    userName : "Dummy User"
})

export default UserContext