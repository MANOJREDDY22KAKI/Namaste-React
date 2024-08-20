import RestaruntCard from "./RestaruntCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

import { useEffect, useState } from "react";
const Body = () => {
  const [ListOfRestarunt, setListOfRestarunt] = useState([]);
  const [filtered_Restarunt, setFiltered_Restarunt] = useState([]);

  const [searchInput, setSearchInput] = useState("");
  // console.log(ListOfRestarunt);
  // console.log(setListOfRestarunt);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      setListOfRestarunt(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
      setFiltered_Restarunt(
        json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleOnClick = () => {
    const filtered = ListOfRestarunt.filter(
      (Restarunt) => parseFloat(Restarunt.info.avgRating) > 4
    );
    setFiltered_Restarunt(filtered);
  };

  return ListOfRestarunt.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filtered_Restarunt = ListOfRestarunt.filter((Restarunt) =>
                Restarunt.info.name
                  .toLocaleLowerCase()
                  .includes(searchInput.toLocaleLowerCase())
              );
              setFiltered_Restarunt(filtered_Restarunt);
            }}
          >
            Search
          </button>
        </div>

        <button onClick={handleOnClick}>Top Rated Restarunt</button>
      </div>
      <div>
        <div className="restaurant-container">
          {filtered_Restarunt.map((restaurant) => (
            <RestaruntCard key={restaurant.info.id} restData={restaurant} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;