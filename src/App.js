import React, { lazy , Suspense, useContext, useState } from "react";
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
import {createBrowserRouter , RouterProvider , Outlet  } from "react-router-dom"
import "./style/common.css";
import UserContext from "./utils/UserContext";



const Instamart = lazy(()=>import("./components/Instamart"))// import is promise 

const AppLayout = () => {

  const data = useContext(UserContext)
  const [userInfo , setUserInfo] = useState(data)

  console.log(userInfo)

  return (
    <>
       {/* DummyUser
       <UserContext.Provider value={{loginData : userInfo}}>
        ElonMusk 
        <UserContext.Provider value={{loginData : {userName : "ElonMusk"}}}>
           <Header />
        </UserContext.Provider>
         <Outlet />  
         Gautam 
        <UserContext.Provider value={{loginData : {userName : "Gautam" , loginUser : true}}}>
         <Footer />
        </UserContext.Provider> 
      </UserContext.Provider> */}
      <UserContext.Provider value={{loginData : userInfo , setUserInfo}}>
      <Header/>
      <Outlet/>
      <Footer/>
      </UserContext.Provider>
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

