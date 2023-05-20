import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../constants"
import useRestarent from "../utils/useRestarent"
import Shimmer from "./Shimmer"

const RestarantMenu = () => {

    //How to read dynamic url route
    /*const [restarant, setRestarant] = useState(null)*/

    const {resId} = useParams()
    const restarant = useRestarent(resId)

    return (!restarant)? <Shimmer/> : (
        <div className="menu">
            <div>
                <h1>RestarentId : {restarant?.data?.cards[0]?.card?.card?.info?.id}</h1>
                <h2>RestarentName : {restarant?.data?.cards[0]?.card?.card?.info?.name}</h2>
                <img 
                src={IMG_CDN_URL + restarant?.data?.cards[0]?.card?.card?.info?.cloudinaryImageId}
                 alt="This is Restarent Image" />
                 <h3>{restarant?.data?.cards[0]?.card?.card?.info?.areaName}</h3>
                 <h3>{restarant?.data?.cards[0]?.card?.card?.info?.city}</h3>
                 <h3>{restarant?.data?.cards[0]?.card?.card?.info?.avgRating}</h3>
                 <h3>{restarant?.data?.cards[0]?.card?.card?.info?.costForTwo/100}</h3>
            </div>
            <div>
                <label htmlFor="menu">Menu</label>
                <ul>
                    {
                        // console.log(restarant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards[0]?.card?.info?.name)
                        restarant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
                        .map(res => (
                            <li key={res?.card?.info?.id}>{res?.card?.info?.name}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default RestarantMenu