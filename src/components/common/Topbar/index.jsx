import React, { useEffect, useState } from "react";
import th from "../../../assets/th.jpeg";
// import {
//   AiOutlineHome,
//   AiOutlineUserSwitch,
//   AiOutlineSearch,
//   AiOutlineMessage,
//   AiOutlineBell,
// } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
// import { BsBriefcase } from "react-icons/bs";
import "./index.scss";

export default function Topbar({ currentUser }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [setIsSearch] = useState(false);
  let navigate = useNavigate();

  const goToRoute = (route) => {
    navigate(route);
  };

//   const displayPopup = () => {
//     setPopupVisible(!popupVisible);
//   };

  useEffect(() => {
    // Your useEffect logic if needed
  }, []);

  return (
    <div className="topbar-main">
      {popupVisible ? (
        <div className="popup-position">
          <></>
        </div>
      ) : (
        <></>
      )}

       <img className="linkedin-logo" src={th} alt="LinkedinLogo" />

      {/* <div className="react-icons">
        <AiOutlineSearch
          size={30}
          className="react-icon"
          onClick={() => setIsSearch(true)}
        />
        <AiOutlineHome
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/home")}
        />
        <AiOutlineUserSwitch
          size={30}
          className="react-icon"
          onClick={() => goToRoute("/connections")}
        />
        <BsBriefcase size={30} className="react-icon" />
        <AiOutlineMessage size={30} className="react-icon" />
        <AiOutlineBell size={30} className="react-icon" />
      </div> */} 

      {/* <img
        className="user-logo"
        src={currentUser?.imageLink}
        alt="user"
        onClick={displayPopup}
      /> */}
    </div>
  );
}
