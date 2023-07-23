import { createContext } from "react";

const UserContext = createContext({
    loginUser : true,
    userName : "Dummy User"
})

export default UserContext