import "./restarentMenuList.css"
import RestarentTitleMenuDisplay from "../RestarentTitleMenuDisplay"

const RestarentMenuList = ({data , showItem , showListItem})=>{

  const handleShowItem = ()=>{
    showListItem()
  }

    return (
      <div className="restarentList_container">
          <div>
            <div className="restarent_title_container cur-po" onClick={handleShowItem}>
              <p className="restarent_title_item">
                {data?.title} (
                {data?.itemCards.length})
              </p>
              {showItem? <i class="fi fi-rr-angle-small-down upArrow"></i> : <i className="fi fi-rr-angle-small-up upArrow"></i>}
            </div> 
            {showItem && <RestarentTitleMenuDisplay itemCards = {data?.itemCards}/>}
          </div>
      </div>
    );
}

export default RestarentMenuList