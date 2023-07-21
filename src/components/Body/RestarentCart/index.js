import { IMG_CDN_URL } from "../../../utils/constants";
import "./reastarentCart.css"

const RestarentCart = 
({
    name,
    cloudinaryImageId,
    cuisines,
    avgRating,
    deliveryTime,
    costForTwo,
    aggregatedDiscountInfo,
}) => {

    const offer = aggregatedDiscountInfo?.descriptionList[0]?.meta;

    return (
        <div className="res-cart">
            <img
                src={IMG_CDN_URL + cloudinaryImageId}
                alt="This is Res-Logo"
                className="restarent-cart-img"
            />
            <h3 className="resName">{name}</h3>
            <p className="resCusines">{cuisines.join(" , ")}</p>
            <div className="resDetail">
                <p className={avgRating>=4? "resRatingGreen" : "resRatingOrange"}>☆ {avgRating}</p>
                <p>•</p>
                <p className="resDeliverTime">{deliveryTime} Mins</p>
                <p>•</p>
                <p className="resPrice">₹{costForTwo / 100} For Two</p>
            </div>
             {
                offer ?
                <div>
                    <div className="res-offer-seperater"></div>
                    <div className="res-offer">{offer}</div>
                </div>
                : ""
             }
        </div>
    );
};

//Higher Order Component

//Input - RestarentCart ==> RestarentCartPromoted

export const withPromotedLabel = (RestarentCart)=>{
    return (restarant)=>{
        return(
            <div>
                <label className="restarentCart-promoted-label">Promoted</label>
                <RestarentCart {...restarant}/>
            </div>
        )
    }
}


export default RestarentCart