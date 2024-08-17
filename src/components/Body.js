import RestaruntCard from "./RestaruntCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {

  const [ListOfRestarunt , setListOfRestarunt] = useState(resList)
  //console.log(ListOfRestarunt);
  console.log(setListOfRestarunt);


  const handleOnClick = ()=>{
    const filtered = ListOfRestarunt.filter(Restarunt => Restarunt.data.avgRating > 4)
    setListOfRestarunt(filtered);
  }

    return (
      <div className="body">
        <div className="search">
          <button onClick={handleOnClick}>Top Rated Restarunt</button>
        </div>
        <div>
          <div className="restaurant-container">
            {ListOfRestarunt.map((restaurant) => (
              <RestaruntCard key = {restaurant.data.id} restData={restaurant} />
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Body ;