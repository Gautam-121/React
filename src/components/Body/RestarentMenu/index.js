import { useParams } from "react-router-dom"
import { IMG_CDN_URL } from "../../../utils/constants"
import useRestarentDetail from "../../../utils/useRestarentDetail"
import Shimmer from "../../Shimmer"
import "./restarentMenu.css"

const RestarantMenu = () => {

    const { resId } = useParams()
    const restarant = useRestarentDetail(resId)

    console.log("res" , restarant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    if(!restarant) return <Shimmer/>

    return (
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
                <h3>{restarant?.data?.cards[0]?.card?.card?.info?.costForTwo / 100}</h3>
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

// const RestarantMenu = () => {

//     //How to read dynamic url route
//     /*const [restarant, setRestarant] = useState(null)*/

//     const { resId } = useParams()
//     const restarant = useRestarentDetail(resId)

//     if(restarant.length === 0){
//         <Shimmer/>
//         return
//     }

//     let {
//         name,
//         areaName,
//         cuisines,
//         costForTwo,
//         cloudinaryImageId,
//         avgRating,
//         totalRating,
//         sla: { delivaryTime },
//       } = restarant?.data?.cards[0]?.card?.card?.info
  
    
//     return (restarant.length === 0) ? <Shimmer/> : (
//         <><h1>{restarant?.data?.cards[0]?.card?.card?.info.name}</h1></>
//     )

//     // return (restarant.length === 0) ? <Shimmer/> :  (
//     //     <div className="restarent_menu_page">
//     //         <div>
//     //             <h4>{ name }</h4><br/>
//     //             <span>{cuisines.join(" , ")}</span><br />
//     //             <span>{areaName}</span>
//     //         </div>
//     //         <div>
//     //             <h5>☆{avgRating}</h5><br />
//     //             <span>{totalRating}</span>
//     //         </div>
//     //     </div>
//     // )
// }

export default RestarantMenu