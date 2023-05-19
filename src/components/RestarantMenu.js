import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../constants"
import Shimmer from "./Shimmer"

const RestarantMenu = () => {

    //How to read dynamic url route
    const [restarant, setRestarant] = useState(null)
    const {resId} = useParams()

    useEffect(() => {
        getRestarantInfo()
    }, [])

    async function getRestarantInfo(){

        const data = await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.1458004&lng=79.0881546&restaurantId=${resId}&submitAction=ENTER`
        )
        const json = await data.json()
        // console.log(json)
        setRestarant(json)
        // console.log("datais" , json?.data?.cards[0]?.card?.card?.info?.id)
    }

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

    // return (!restarant) ?
    //     <Shimmer /> :
    //     (
    //         <div className="menu">
    //             <div>
    //                 <h1>Restaraunt Id : 123 </h1>
    //                 <h2>{restarant?.name}</h2>
    //                 <h3>{params}</h3>
    //                 <img
    //                     src={IMG_CDN_URL + restarant.cloudanaryImgageId}
    //                     alt=""
    //                 />
    //                 <h3>{restarant?.area}</h3>
    //                 <h3>{restarant?.city}</h3>
    //                 <h3>{restarant?.avgRating} stars</h3>
    //                 <h3>{restarant?.costForTwoMsg}</h3>
    //             </div>
    //             <div>
    //                 <label htmlFor="">Menu</label>
    //                 {console.log(Object.values(restarant.menu.items))}
    //                 <ul>
    //                     {
    //                         Object.values(restarant?.menu?.items).map(item => (
    //                             <li key={item.id}>{item.name}</li>
    //                         ))
    //                     }
    //                 </ul>
    //             </div>
    //         </div>
    //     )
}

export default RestarantMenu