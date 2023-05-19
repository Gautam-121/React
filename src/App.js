import React from "react";
import ReactDOM from 'react-dom/client'
import Header from './components/Header' // this is default Import
import Body from "./components/Body";
import Footer from "./components/Footer";
import Login from './components/Login'
import Register from "./components/Register";
import About from "./components/About";
import Error from "./components/Error"
import Contact from "./components/Contact";
import RestarantMenu from "./components/RestarantMenu";
import Cart from "./components/Cart";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";


const AppLayout = () => {
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
          element : <About/>
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

