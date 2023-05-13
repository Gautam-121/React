import React from "react";
import ReactDOM from 'react-dom/client'
import Header , { Title } from './components/Header' // this is default Import
// import { Title } from "./components/Header"; // this is Named import
import * as obj from './components/Header' // we export all named export so using . operator we can us that pertical component
import Body from "./components/Body";
import Footer from "./components/Footer";
// obj.Header



const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />) 

