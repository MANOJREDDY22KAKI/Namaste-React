import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/Heading";
import RestaruntCard from "./components/RestaruntCard";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , RouterProvider} from "react-router-dom";
import About from "./components/About";
import ContactUS from "./components/ContactUs";
import Error from "./components/Error";
const AppLaout = () => {
  return (
    <div className="app">
      <Heading />
      <Body></Body>
      <Footer></Footer>
    </div>
  );
};


const approuter = createBrowserRouter([
  {
    path : "/",
    element : <AppLaout/>,
    errorElement : <Error/>,
    
  },
  {
    path : "/about",
    element : <About/>
  },
  {
    path : "/contact",
    element : <ContactUS />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
