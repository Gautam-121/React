import React from "react";
import ReactDOM from 'react-dom/client'

/**
 * Create a Server
 * HMR --> Hot Module Replacement 
 * file Watcher algorithm -- writeen in c++
 * BUNDLING
 * MINIFY
 * REMOVE CONSOLE  --> Cleaning our Code
 * Dev and Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression the Size
 * Compatble with older version of browser
 * Parcel give functinallity to run server on HTTP on development phase using npx parcel index.html --https
 * Port Number
 * Consistent Hshing Algorithm  --> to do all cachimg for this
 * Zero Config
 * Tree Shaking --> Removing Unwanted Code
 * 
 */
    

    //React.createElement ==> It is give Javascript Object ==> HTML(DOM)


    const header = ( // React Element
        <div className="header">
            <h1>Namste React</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>SignUp</li>
                </ul>
            </nav>
        </div>
    )

    const Header = ()=> ( // React Element
        <div className="header">
            <h1 className="title">Namste React</h1>
            <nav>
                <ul className="nav">
                    <a href=""><li>Home</li></a>
                    <a href=""><li>About Us</li></a>
                    <a href=""><li>Contact</li></a>
                    <a href=""><li>SignUp</li></a>
                </ul>
            </nav>
        </div>
    )

    //React Component
    /**
    Functional Component
    Class Component
    Name of component start with capital letter --> its not mandatory but it is good practise
     */

    
    const HeaderComaponent = () => {
        return <h1>Namste RAEAC</h1>
    };

    const HeaderComaponent2 = () => {
        return (
            <div>
                <h1>Namaste React functional component</h1>
                <h2>Namste React</h2>
            </div>
        )
    };

    const HeaderComaponent3 = () => (
            <div>
                {header} 
                <Header/>
                {Header()}
                <h1>Namaste React functional component</h1>
                <h2>Namste React</h2>
            </div>
         )

    const createRoot = ReactDOM.createRoot(document.getElementById("root"))

    //createRoot.render(header) // render react Element
    createRoot.render(<HeaderComaponent3/>) // render react component

