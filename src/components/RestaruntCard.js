import { REST_LOGO } from "../utils/constants";
const RestaruntCard = (props) => {
    const { restData } = props;
    const {
      cloudinaryImageId,
      name,
      cuisines,
      avgRating,
      costForTwo,
      deliveryTime,
    } = restData?.data;
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
          <div><h4>₹{costForTwo /100} for two</h4></div>
          <div><h4>Delivered in {deliveryTime} minutes </h4></div>
        </div>
      </div>
    );
  };

  export default RestaruntCard