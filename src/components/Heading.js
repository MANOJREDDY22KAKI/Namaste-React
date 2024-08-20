import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
const Heading = () => {
  const [loginbtn, setLoginbtn] = useState("login");
  //console.log("Heading") ;
  // useEffect(() => {
  //   console.log("useEffect")
  // },[loginbtn])
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="Icon" />
      </div>
      <div className="Nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button className="login-btn"
            onClick={() => {
              loginbtn === "login"
                ? setLoginbtn("Logout")
                : setLoginbtn("login");
            }}
          >
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Heading;
