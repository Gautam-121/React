import { useParams } from "react-router-dom"
import useRestarentDetail from "../../../utils/useRestarentDetail"
import Shimmer from "../../Shimmer"
import "./restarentMenu.css"
import RestarentMenuList from "./RestarentMenuList"
import { useState } from "react"

const RestarantMenu = () => {

    const { resId } = useParams()
    const restarant = useRestarentDetail(resId)

    const [showItem , setShowItem] = useState(null)

    const showListItem = (index)=>{
        if(showItem === index) setShowItem(null)
        else setShowItem(index)
    }

    if(!restarant) return <Shimmer/>

    const restarentMenuFilter = restarant?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((restarant) => {
        return restarant?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

    const {areaName , avgRating , costForTwo ,cuisines , name , totalRatingsString , sla:{maxDeliveryTime}} = restarant?.data?.cards[0]?.card?.card?.info

    return (
        <div className="restarentMenu_container">
            <div className="restarent_detail_container">
                <div className="restarent_basic_detail">
                    <h3>{name}</h3>
                    <p className="restarent_cusines">{cuisines.join(" , ")}</p>
                    <p className="restarent_cusines">{areaName}, Nagpur</p>
                </div>
                <div className="restarent_rating_detail">
                   <span className="restarent_rating">☆{avgRating}</span>
                   <span className="restarent_totalRating">{totalRatingsString}</span>
                </div>
            </div>
             <hr className="restarent_seperator"/>
             <div className="restarent_margin_botton">
                <div className="restarent_time_cost_wrapper">
                    <div className="RestaurantTimeCost_item1">⌛{maxDeliveryTime} MINS</div>
                    <div className="RestaurantTimeCost_item1">₹ {costForTwo/100}</div>
                </div>
             </div>
             <hr className="restarent_seperator"/>
             { 
                restarentMenuFilter.map((item , index)=>(
                    //Controlled Component
                    <RestarentMenuList 
                    key={index}
                    data={item?.card?.card}
                    showItem={showItem===index ? true : false}
                    // setShowItem={()=>setShowItem(index)}
                    showListItem={()=>showListItem(index)}
                     />
                ))
             }
        </div>
    )
}


export default RestarantMenu