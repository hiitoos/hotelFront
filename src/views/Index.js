import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";


import RoomList from "./RoomList/RoomList.jsx"
import Carousel from "./index-sections/Carousel.js";


function Index(props) {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
          <Carousel /><br/>
          <RoomList  {...props}/>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
