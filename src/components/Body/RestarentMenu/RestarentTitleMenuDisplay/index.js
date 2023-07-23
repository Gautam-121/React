import { IMG_CDN_URL } from "../../../../utils/constants";
import "./restarentTitleMenuDisplay.css";

const RestarentTitleMenuDisplay = ({ itemCards }) => {

  return (
    <div className="restarent_item_menu_wrapper">
      {itemCards.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className="restarent_item_wrapper" key={item?.card?.info?.id}>
            <div className="restarent_name_price_wrapper">
              <h4 className = "restarent_item_name">{item?.card?.info?.name}</h4>
              <p className = "restarent_item_price">₹{item?.card?.info?.price / 100}</p>
            </div>
            <div className = "restarent_img_wrapper">
              {
                item?.card?.info?.imageId ? 
                <img
                src={IMG_CDN_URL + item?.card?.info?.imageId}
                alt="This is Item img"
                className="restarent_item_img"
              />
              : ""
              }
              <button className = "restarent_item_add">ADD</button>
            </div>
          </div>
          <hr className="restarent_seperator"/>
        </div>
      ))}
    </div>
  );
};

export default RestarentTitleMenuDisplay;
