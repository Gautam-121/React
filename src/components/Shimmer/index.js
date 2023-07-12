import "./shimmer.css"

const Shimmer = ()=>{

    const restarentList = new Array(20)

    return (
       <div className="max-width shimmer-container">
           {restarentList
            .fill("")
            .map((e , index)=>{
                return <div key = {index} className="shimmer"></div>
            })}
        </div>
    )
}

export default Shimmer