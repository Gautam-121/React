import { IMG_CDN_URL } from "../../../../utils/constants";
import "./restarentTitleMenuDisplay.css";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../utils/cartSlice";

const RestarentTitleMenuDisplay = ({ itemCards }) => {

  const dispatch = useDispatch()

  const handleAddItem = (item)=>{
    dispatch(addItem(item))
  }

  /**
   *  {
   *   payload : "pizza"
   *  }
   * 
   */

  console.log(itemCards[0])

  return (
    <div className="restarent_item_menu_wrapper">
      {itemCards.map((item) => (
        <div key={item?.card?.info?.id}>
          <div className="restarent_item_wrapper" key={item?.card?.info?.id}>
            <div className="restarent_name_price_wrapper">
              <h4 className = "restarent_item_name">{item?.card?.info?.name}</h4>
              <p className = "restarent_item_price">₹{item?.card?.info?.price / 100}</p>
              <p className="restarent_item_desc">{item?.card?.info?.description}</p>
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
              <button className = "restarent_item_add"
              // onClick={handleAddItem}
              onClick={()=>handleAddItem(item)}
              // onClick={handleAddItem()}
              >
                ADD
              </button>
            </div>
          </div>
          <hr className="restarent_seperator"/>
        </div>
      ))}
    </div>
  );
};

export default RestarentTitleMenuDisplay;
