import React, { useState } from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import DarkFooter from "components/Footers/DarkFooter.js";


import RoomList from "./RoomList/RoomList.jsx"
import Carousel from "./index-sections/Carousel.js";
import RoomService from "../services/room.service"



function Index(props) {
  const [state, setState] = useState([])
  React.useEffect(() => { 
    RoomService.getAllRooms().then((data) => setState(data)).catch(console.log("ERROR en la conexión a la API"))

    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };

  }, [props]);

  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <div className="main">
          <Carousel /><br/>
          {state.length!==0?<RoomList {...props} rooms={state}/>:<></>}
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
