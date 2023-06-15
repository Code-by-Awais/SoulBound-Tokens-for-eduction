// import Header from "../Components/header";
import React from "react";

export default function Home() {
  return (
    <div className="dashboardMainClass">
      <div className="leftSideMenu">
        <div className="leftSiderMenuItem">
          <p>Home</p>
        </div>
        <div className="leftSiderMenuItem">
          <p>Check Degree</p>
        </div>
        <div className="leftSiderMenuItem">
          <p>Generate Degree</p>
        </div>
        <div className="leftSiderMenuItem">
          <p>HEC Side</p>
        </div>
        <div className="leftSiderMenuItem">
          <p>Minting</p>
        </div>
        <div className="leftSiderMenuItem">
          <p>Others</p>
        </div>
      </div>
      <div className="mainDisplayerScreenDiv">
        <p>diff pags will be shown here</p>
      </div>
    </div>
  );
}
