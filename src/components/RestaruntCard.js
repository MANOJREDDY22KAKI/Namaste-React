import { REST_LOGO } from "../utils/constants";
const RestaruntCard = (props) => {
    const { restData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      sla,
    } = restData?.info;
    return (
      <div className="restaurant-card">
        <div>
          <img
            className="rest-logo"
            src={ REST_LOGO +
              cloudinaryImageId}
            alt="rest-icon"
          />
        </div>
        <div className="details">
          <div><h3>{name}</h3></div>
          <div><h4>{cuisines.join(',')}</h4></div>
          <div><h4>Rating : {avgRating} ⭐ </h4></div>
          <div><h4>{costForTwo}</h4></div>
          <div><h4>{sla.slaString}</h4></div>
        </div>
      </div>
    );
  };

  export default RestaruntCard