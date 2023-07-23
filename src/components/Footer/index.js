import "./footer.css"
import React , {useContext} from "react"
import UserContext from "../../utils/UserContext"

const Footer = () => {

  const {loginData : {loginUser , userName}} = useContext(UserContext)

  return(
    <div className="footer-container">
      <span>{userName}</span>
      <p className="absolute-centre">Created By ❤️ <strong>Gautam Dhakate</strong>  © 2023 <strong>Menu</strong><span style={{color : "red"}}>Hub</span></p>
    </div>
  )
}

export default Footer