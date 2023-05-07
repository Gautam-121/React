/*

<div>
    <h1>Heading1</h1>
    <h2>Heading2</h2>
</div>

<div>
    <div>
         <h1>Heading1</h1>
         <h2>Heading2</h2>
    </div>
    <div>
         <h1>Heading1</h1>
         <h2>Heading2</h2>
    </div>
</div>

*/
    
    
    //React is Global Element is core of react --> react have api createElement
    //have responsibillity to create react-Element
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

    console.log(heading1) // React store the react Element as javascript object
    //so react-element at the end of the it simple javascript object

    const paragraph = React.createElement("p" , {id : "paragraph"} , "This is contain about MySelf")

    //We have ReactDOM wgich is responsiable for Dom operation --> createRoot tell that what is pass inside it becomes the root of the app
    const createRoot = ReactDOM.createRoot(document.getElementById("root"))

    const root1 = ReactDOM.createRoot(document.getElementById("root1"))

    //render is conver this react-element to html tag and pass inside the root
    root1.render(paragraph)
    createRoot.render(parentDiv)
