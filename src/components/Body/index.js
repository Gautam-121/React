import { useState , useContext } from "react";
import RestarentCart , {withPromotedLabel} from "./RestarentCart";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import { filterResdata, filterData } from "../../utils/helper";
import useRestarent from "../../utils/useRestarentList";
import RestarentFilter from "./RestarentFilter/index.js";
import SearchBar from "./SearchBar";
import "./body.css"
import UserContext from "../../utils/UserContext";

const Body = () => {

  const [searchInput, setSearchInput] = useState("");
  const restarents = useRestarent();
  const [searchRestarent, setSearchRestarent] = useState(restarents);
  const [enter, setEnter] = useState(false);

  if (enter === false && restarents.length !== 0) {
    setSearchRestarent(restarents);
    setEnter(true);
  }

  const RestarentWithPromoted = withPromotedLabel(RestarentCart)

  const {loginData , setUserInfo} = useContext(UserContext)

  return restarents.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <SearchBar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        restarents={restarents}
        setSearchRestarent={setSearchRestarent}
      />
      <input type="text" 
      onChange={(e)=>setUserInfo({loginUser : true,userName :e.target.value})}
      value={loginData.userName}
      />
      <div className="filter-res">
        <h2 className="total-res">{searchRestarent.length} Restarents</h2>
        <RestarentFilter
          filterResdata={filterResdata}
          setSearchRestarent={setSearchRestarent}
          restarent={restarents}
        />
      </div>
      <div className="restarent-item">
        {/* { You have to write no restarent found here} */}
        {searchRestarent.length == 0 ? (
          <h1 className="No-res">No Restarent Found</h1>
        ) : (
          searchRestarent.map((restarent) => (
            <Link
              to={"/restarant/" + restarent?.data?.id}
              key={restarent?.data?.id}
              className="restarent-link"
            >
              {
                restarent?.data?.promoted ? <RestarentWithPromoted {...restarent?.data}/> : <RestarentCart {...restarent?.data} />
              }
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
