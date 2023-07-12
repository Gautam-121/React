import { useState } from "react";
import RestarentCart from "./RestarentCart";
import Shimmer from "../Shimmer";
import { Link } from "react-router-dom";
import { filterResdata, filterData } from "../../utils/helper";
import useRestarent from "../../utils/useRestarentList";
import RestarentFilter from "./RestarentFilter/index.js";
import SearchBar from "./SearchBar";
import "./body.css"

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const restarents = useRestarent();
  const [searchRestarent, setSearchRestarent] = useState(restarents);
  const [enter, setEnter] = useState(false);

  if (enter === false && restarents.length !== 0) {
    setSearchRestarent(restarents);
    setEnter(true);
  }

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
              <RestarentCart {...restarent?.data} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
