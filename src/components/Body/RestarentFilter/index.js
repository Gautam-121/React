import { useState } from "react"
import { listFilter } from "../../../utils/constants" 
import "./restarentFilter.css"

const RestarentFilter = ({ filterResdata , setSearchRestarent , restarent }) => {

    const [itemSelect , setItemSelect] = useState(listFilter)
    
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