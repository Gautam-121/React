import { useState } from "react"
import { listFilter } from "../../../utils/constants" 
import "./restarentFilter.css"

const RestarentFilter = ({ filterResdata , setSearchRestarent , restarent }) => {

    // const item = ["Rating4+", "Rating : High To Low", "Delivery Time", "Cost: Low To High", "Cost: High To Low"]

    const [itemSelect , setItemSelect] = useState(listFilter)

    console.log(itemSelect)
    
    return (

        <div className='pro-Filter'>
           <div className="filter-wrapper">
              {
                
                itemSelect.map( filtOption => (
                    <div
                        className={`filter ${filtOption.active ? "active" : ""}`}
                        onClick={() => filterResdata(filtOption.name , setSearchRestarent , restarent , itemSelect , setItemSelect )}
                        key={filtOption.id}
                    >
                     {filtOption.name}
                    </div>
                ))
              }
           </div>
        </div>
    )
}

export default RestarentFilter