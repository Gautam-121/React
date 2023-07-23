import "./cart.css"
import { useContext } from "react"
import UserContext from "../../utils/UserContext"

const Cart = ()=>{

    const {loginData : {loginUser , userName}} = useContext(UserContext)

    return(
        <div>
            <h1>This is Cart</h1>
            <h2>{userName}</h2>
        </div>
    )
}

export default Cart