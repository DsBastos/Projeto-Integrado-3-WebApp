import React from "react";

 const SideBar = ({ redeSocial }) => {
  return (
    <div className="mt-5">
      <div className="d-flex align-items-center mt-2">
        <span className="bg-yellow-incommun rounded-circle p-2 fw-bolder">
          01
        </span>
        <span className="ps-2">{redeSocial}</span>
      </div>
      <div className="d-flex align-items-center mt-2">
        <span className="bg-yellow-incommun rounded-circle p-2 fw-bolder">
          02
        </span>
        <span className="ps-2">tiktok e instagram</span>
      </div>
    </div>
  );
};

export default SideBar;