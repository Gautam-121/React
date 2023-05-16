import React from "react";
import ReactDOM from 'react-dom/client'
import Header from './components/Header' // this is default Import
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from './components/Login'
import Register from "./components/Register";


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
      {/* <Login/> */}
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />) 

