// import Header from "../Components/header";
import React, { useState } from "react";

export default function Home() {
  const [home, setHome] = useState(true);
  const [degree, setDegree] = useState(false);
  const [generate, setGenerate] = useState(false);
  const [hec, setHec] = useState(false);
  const [minting, setMinting] = useState(false);
  const [other, setOther] = useState(false);
  // const [about, setAbout] = useState(false);

  const handleHomeClick = () => {
    setHome(true);
    setDegree(false);
    setGenerate(false);
    setHec(false);
    setMinting(false);
    setOther(false);
  };
  const handleDegreeClick = () => {
    setHome(false);
    setDegree(true);
    setGenerate(false);
    setHec(false);
    setMinting(false);
    setOther(false);
  };
  const handleGenerateClick = () => {
    setHome(false);
    setDegree(false);
    setGenerate(true);
    setHec(false);
    setMinting(false);
    setOther(false);
  };
  const handleHecClick = () => {
    setHome(false);
    setDegree(false);
    setGenerate(false);
    setHec(true);
    setMinting(false);
    setOther(false);
  };

  const handleMintingClick = () => {
    setHome(false);
    setDegree(false);
    setGenerate(false);
    setHec(false);
    setMinting(true);
    setOther(false);
  };

  const handleOtherClick = () => {
    setHome(false);
    setDegree(false);
    setGenerate(false);
    setHec(false);
    setMinting(false);
    setOther(true);
  };
  return (
    <div className="dashboardMainClass">
      <div className="leftSideMenu">
        <div
          // className="leftSiderMenuItem"
          onClick={handleHomeClick}
          className={home ? "sidemenuSelected" : "leftSiderMenuItem"}
        >
          <p>Home</p>
        </div>
        <div
          onClick={handleDegreeClick}
          className={degree ? "sidemenuSelected" : "leftSiderMenuItem"}
        >
          <p>Check Degree</p>
        </div>
        <div
          onClick={handleGenerateClick}
          className={generate ? "sidemenuSelected" : "leftSiderMenuItem"}
        >
          <p>Generate Degree</p>
        </div>
        <div
          onClick={handleHecClick}
          className={hec ? "sidemenuSelected" : "leftSiderMenuItem"}
        >
          <p>HEC Side</p>
        </div>
        <div
          onClick={handleMintingClick}
          className={minting ? "sidemenuSelected" : "leftSiderMenuItem"}
        >
          <p>Minting</p>
        </div>
        <div
          onClick={handleOtherClick}
          className={other ? "sidemenuSelected" : "leftSiderMenuItem"}
        >
          <p>Others</p>
        </div>
      </div>
      {home && (
        <div className="mainDisplayerScreenDiv">
          <p>Dashboard</p>
        </div>
      )}
      {degree && (
        <div className="mainDisplayerScreenDiv">
          <div>
            <p>CHECK DEGREE</p>
          </div>
          <div>
            <input
              className="searchField"
              type="search"
              placeholder="Enter sap id to search"
            />
          </div>
          <div>
            <div>
              <table>
                <thead>
                  <tr>
                    <th>Sap id&nbsp;</th>
                    <th>Student Name&nbsp;&nbsp;</th>
                    <th>Department Name&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>7066453&nbsp;&nbsp;</td>
                    <td>Awais Ahmed&nbsp;</td>
                    <td>Software Engineering&nbsp;</td>
                  </tr>
                  <tr>
                    <td>7065353&nbsp;&nbsp;</td>
                    <td>Saad Ahmed&nbsp;</td>
                    <td>Electrical Engineering&nbsp;</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      {generate && (
        <div className="mainDisplayerScreenDiv">
          <p>Generate Degree </p>
          <div className="generateHolders">
            <input
              className="searchField"
              type="search"
              placeholder="Enter sap id to search"
            />
            <div>
              <button className="generateBtn" type="submit">
                Generate
              </button>
            </div>
          </div>
        </div>
      )}
      {hec && (
        <div className="mainDisplayerScreenDiv">
          <p>HEC Affiliated Student Details</p>
          <div>
            <input
              className="searchField"
              type="search"
              placeholder="Search student details from HEC"
            />
          </div>
        </div>
      )}
      {minting && (
        <div className="mainDisplayerScreenDiv">
          <p>Minting Details Here</p>
        </div>
      )}
      {other && (
        <div className="mainDisplayerScreenDiv">
          <p>Other Details Here</p>
        </div>
      )}
    </div>
  );
}
