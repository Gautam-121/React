import { useState } from 'react' // Named import
import { restarentCards as restarentList } from "../constants"
import RestarentCart from './RestarentCart'


//what is state and why 
// what is Hooks and why
// what is useState and why

function filterData(restarents , searchInput){

    const filterResList = restarents.filter(restarent => (
        restarent?.data?.name?.toLocaleLowerCase().includes(searchInput?.toLocaleLowerCase())
    ))
    return filterResList
}

const Body = () => {


    let searchTxt = "KFC" // this is the way to create a variable in javascript

    // searchText is a local state variable
    const [searchInput, setSearchInput] = useState("KFC") // To used for create state-variable 

    const serchClicked = "false"

    const [searchClicked, setSearchClicked] = useState("false")

    let [restarents , setRestarent] = useState(restarentList)

    return (
        <>
            <div className='serch-bar'>
                <input
                    type="text"
                    className="serch-input"
                    placeholder="Get your Favorite Food..."
                    value={searchInput}
                    onChange={(e) => {
                        //searchTxt = e.target.value //This don't work 
                        setSearchInput(e.target.value)
                    }}
                />
                <h1>{searchInput}</h1>
                <button className="serch-btn" onClick={() => {
                    
                    searchClicked === "true" ? setSearchClicked("false") :  setSearchClicked("true")

                    //need to filter the data
                    // update the state - restarents
                 const filterResdata =  filterData(restarents , searchInput)

                setRestarent(filterResdata)

                }}>Search</button>
                <h1>{searchClicked}</h1>
            </div>
            <div className="restarent-item">
                {
                    restarents.map(restarent => (
                        <RestarentCart {...restarent.data} key={restarent.data.id} />
                    ))
                }
            </div>
        </>
    )
}

export default Body