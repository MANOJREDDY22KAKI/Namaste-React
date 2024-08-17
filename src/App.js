import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import RestaruntCard from "./components/RestaruntCard";
import Body from "./components/Body";
import Footer from "./components/Footer";







const AppLaout = () => {
  return (
    <div className="app">
      <Heading />
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLaout />);
