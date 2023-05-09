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
 * 
 */
    
    
    const heading1 = React.createElement(
        "h1" , 
        {id : "heading2"} ,
        "This is Heading1"
    );

    const heading2 = React.createElement(
        "h2" , 
        {id : "heading2"} ,
        "This is Heading2"
    );

    const divContainer = React.createElement(
        "div" , 
        {id : "container"} ,
        [heading1 , heading2] // child pass inside an array
    );

    const children1 = React.createElement(
        "div",
        {id : "child1"},
        [heading1 , heading2]
    )

    const children2 = React.createElement(
        "div",
        {id : "child2"},
        [heading1 , heading2]
    )

    const parentDiv = React.createElement(
        "div",
        {id : "parent"},
        [children1 , children2]
    )

    console.log(heading1)

    const paragraph = React.createElement("p" , {id : "paragraph"} , "This is contain about MySelf")

    const createRoot = ReactDOM.createRoot(document.getElementById("root"))

    createRoot.render(parentDiv)
