import { useEffect } from "react"
import { filterData } from "../../../utils/helper"
import "./serchbar.css"

const SearchBar = ({searchInput , setSearchInput , restarents , setSearchRestarent}) =>{

    useEffect(()=>{
        const filter = filterData(restarents , searchInput)
        setSearchRestarent(filter)
    },[searchInput])

    return(
        <div className='serchbar-container'>
        <input
            type="text"
            className="max-width absolute-centre serch-input"
            placeholder="Search for restaurant, cuisine or a dish"
            value={searchInput}
            onChange={(e) => {
                setSearchInput(e.target.value)
            }}
        />
    </div>
    )
}

export default SearchBar