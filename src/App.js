import React, { lazy , Suspense } from "react";
import ReactDOM from 'react-dom/client'
import Header from './components/Header' // this is default Import
import Body from "./components/Body/index";
import Footer from "./components/Footer";
import Login from './components/Auth/Login'
import Register from "./components/Auth/Register";
import About from "./components/About";
import Error from "./components/Error"
import Contact from "./components/Contact";
import RestarantMenu from "./components/Body/RestarentMenu";
import Cart from "./components/Cart";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import "./style/common.css";
import {createBrowserRouter , RouterProvider , Outlet  } from "react-router-dom"



// import Instamart from "./components/Instamart";

//Lazy Lading
//Chunking
//Code Spliting
//Dynamic Bundling
//Lazy Loading
// On Demand Import

//This is Import it lazy way

const Instamart = lazy(()=>import("./components/Instamart"))// import is promise 
//Upon On Demand Loading --> 

const AppLayout = () => {


  //Never ever write lazy loading inside component
  // const Instamart = lazy(()=>import("./components/Instamart"))// import is promise 


  return (
    <>
      <Header />
      <Outlet />   
      <Footer />
      {/* <Login/> */}
    </>
  )
}


const appRouter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>,
    errorElement : <Error/>,
    children : [
      {
        path : "/",
        element : <Body/>,
      },
      {
          path : "/about",
          element : <About/>,
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/cart",
        element : <Cart/>
      },
      {
        path:"/login",
        element : <Login/>
      },
      {
        path:"/signIn",
        element : <Register/>
      },
      {
        path : "/restarant/:resId",
        element : <RestarantMenu/>
      },
      {
        path : "/instamart",
        element : <Suspense fallback = {<h1>THIS IS</h1>}>
                    <Instamart/>
                  </Suspense>
      }
    ]
  },
  {
    path : "/about",
    element : <About/>
  }
])



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>) 

