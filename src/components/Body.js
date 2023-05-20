import { useEffect, useState } from 'react'
import RestarentCart from './RestarentCart'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import {
    filterData , 
    getReatingTopToBottom , 
    getTopRatedRestarent,
    lowToHighDeliveryTime,
    costLowToHigh,
    costHighToLow
} from "../utils/helper"
import useOnline from '../utils/useOnline'

const Body = () => {

    const [searchInput, setSearchInput] = useState("")

    let [restarents, setRestarent] = useState([])
    let [searchRestarent, setSearchRestarent] = useState([])

    useEffect(() => {
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

    const isOnline = useOnline()

    //Early return
    if(!isOnline){
        return <h1>offline, please check your internet connection!!</h1>
    }

    if (!restarents) return null

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
                </div>
                <div className='filter-res'>
                       <h2 className='total-res'>{searchRestarent.length} Restarents</h2>
                        <div className='pro-Filter'>
                        <button
                            className='filter'
                            onClick={() => {
                                const ratingTopTOBottom = getReatingTopToBottom(restarents)
                                setSearchRestarent(ratingTopTOBottom)
                            }}
                        >
                            Rating
                        </button>
                        <button
                            className='filter'
                            onClick={() => {
                                const topRated = getTopRatedRestarent(restarents)
                                setSearchRestarent(topRated)
                            }}
                        >
                            Top Rated
                        </button>
                        <button
                            className='filter'
                            onClick={() => {
                                const deliveryTime = lowToHighDeliveryTime(restarents)
                                setSearchRestarent(deliveryTime)
                            }}
                        >
                            Delivery Time
                        </button>
                        <button
                            className='filter'
                            onClick={() => {
                                const costInc = costLowToHigh(restarents)
                                setSearchRestarent(costInc)
                            }}
                        >
                            Cost: Low To High
                        </button>
                        <button
                            className='filter'
                            onClick={() => {
                                const costDec = costHighToLow(restarents)
                                setSearchRestarent(costDec)
                            }}
                        >
                            Cost: High To Low
                        </button>
                        </div>
                    </div>
                <div className="restarent-item">
                    {/* { You have to write no restarent found here} */}
                    {
                        searchRestarent.length == 0 ? <h1 className='No-res'>No Restarent Found</h1> : 
                        searchRestarent.map(restarent => (
                            <Link 
                                to={"/restarant/" + restarent?.data?.id}
                                key = {restarent?.data?.id}
                                className='restarent-link'
                                >
                                <RestarentCart {...restarent?.data}/>
                            </Link>
                        ))
                    }
                </div>
            </>
        )
}

export default Body