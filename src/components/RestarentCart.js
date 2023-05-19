import { IMG_CDN_URL } from "../constants";

const RestarentCart = ({
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
            <hr />
            <div className="resOffer">
                <span></span>
                <span>{offer}</span>
            </div>
        </div>
    );
};

export default RestarentCart