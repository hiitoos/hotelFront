import React from 'react'
// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";

function Main (){
    return(
     <>
         <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        </div>
     </>   
    )
}

export default Main