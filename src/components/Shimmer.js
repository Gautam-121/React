const Shimmer = ()=>{

    const restarentList = new Array(20)

    return (
       <div className="shimmer-container">
           {restarentList
            .fill("")
            .map((e , index)=>{
                return <div key = {index} className="shimmer"></div>
            })}
        </div>
    )
}

export default Shimmer