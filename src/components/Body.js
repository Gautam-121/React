import { useEffect, useState } from 'react' 
import RestarentCart from './RestarentCart'
import Shimmer from './Shimmer'

function filterData(restarents, searchInput) {
    const filterResList = restarents.filter(restarent => (
        restarent?.data?.name?.toLocaleLowerCase().includes(searchInput?.toLocaleLowerCase())
    ))
    return filterResList
}

function getReatingTopToBottom([...restarents]) {
    restarents.sort((a, b) => {
        return b?.data?.avgRating - a?.data?.avgRating
    })
    return restarents
}

function getTopRatedRestarent(restarents) {
    const getTopRatedRestarent = restarents.filter(restarent => (
        restarent?.data?.avgRating >= 4
    ))
    return getTopRatedRestarent
}

function lowToHighDeliveryTime([...restarents]) {
    restarents.sort((a, b) => {
        return a?.data?.deliveryTime - b?.data?.deliveryTime
    })
    return restarents
}

function costLowToHigh([...restarents]) {
    restarents.sort((a, b) => {

        if (a?.data?.costForTwo == b?.data?.costForTwo) {
            return a?.data?.deliveryTime - b?.data?.deliveryTime
        }
        else {
            return a?.data?.costForTwo - b?.data?.costForTwo
        }
    })
    return restarents
}

function costHighToLow([...restarents]) {
    restarents.sort((a, b) => {

        if (a?.data?.costForTwo == b?.data?.costForTwo) {
            return a?.data?.deliveryTime - b?.data?.deliveryTime
        }
        else {
            return b?.data?.costForTwo - a?.data?.costForTwo
        }
    })
    return restarents
}

const Body = () => {

    const [searchInput, setSearchInput] = useState("")

    let [restarents, setRestarent] = useState([])
    let [searchRestarent, setSearchRestarent] = useState([])

    // Empty dependency array ==> once after render
    // dependency array [serchText] => once after initial render + everytime after render
    useEffect(() => {
        console.log("Call this when dependancy serchText is chaged")
        //Api call with empty dependency array --> callback function called once 
        getRestarents()
    }, [])

    async function getRestarents() {

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.1458004&lng=79.0881546&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json()
        console.log(json)

        setRestarent(json?.data?.cards?.[2].data?.data?.cards)
        setSearchRestarent(json?.data?.cards?.[2].data?.data?.cards)
    }

    console.log("Render")

    // fetch() // it is not good place call an api because at each small state change it will call

    //Conditional Rendering

    //If Restarent is Empty ==> Shimmer Ui
    // if restarent has data ==> atual data UI

    //not render component (Early Return)
    if(!restarents) return null

    if(searchRestarent?.length == 0){
        return <h1>No restarent Match Your Filter</h1>
    }


    return (restarents.length === 0) ?
        <Shimmer />
        :
        (
            <>
                <div className='serch-bar'>
                    <input
                        type="text"
                        className="serch-input"
                        placeholder="Get your Favorite Food..."
                        value={searchInput}
                        onChange={(e) => {
                            setSearchInput(e.target.value)
                        }}
                    />
                    <button className="serch-btn" onClick={() => {
                        const filterResdata = filterData(restarents, searchInput)
                        setSearchRestarent(filterResdata)
                    }}
                    >Search
                    </button>
                    <button
                        className='topRated'
                        onClick={() => {
                            const ratingTopTOBottom = getReatingTopToBottom(restarents)
                            setSearchRestarent(ratingTopTOBottom)
                        }}
                    >
                        getReatingTopToBottom
                    </button>
                    <button
                        className='topRated'
                        onClick={() => {
                            const topRated = getTopRatedRestarent(restarents)
                            setSearchRestarent(topRated)
                        }}
                    >
                        getTopRatedRestarent
                    </button>
                    <button
                        className='topRated'
                        onClick={() => {
                            const deliveryTime = lowToHighDeliveryTime(restarents)
                            setSearchRestarent(deliveryTime)
                        }}
                    >
                        lowToHighDeliveryTime
                    </button>
                    <button
                        className='topRated'
                        onClick={() => {
                            const costInc = costLowToHigh(restarents)
                            setSearchRestarent(costInc)
                        }}
                    >
                        costInc
                    </button>
                    <button
                        className='topRated'
                        onClick={() => {
                            const costDec = costHighToLow(restarents)
                            setSearchRestarent(costDec)
                        }}
                    >
                        costDec
                    </button>
                </div>
                <h2>{searchRestarent.length} Restarents</h2>
                <div className="restarent-item">
                    {/* { You have to write no restarent found here} */}
                    {
                        searchRestarent.map(restarent => (
                            <RestarentCart {...restarent.data} key={restarent.data.id} />
                        ))
                    }
                </div>
            </>
        )
}

export default Body