import React from "react";

const InfoBox = ({ icon, title, description }) => {
  return (
    <div className="col-md-4">
      <div className="icon-box">
        <div className="icon" style={{ fontSize: "40px", color: "#333" }}>
          {icon}
        </div>
        <h3 className="title">{title}</h3>
        <p className="des">{description}</p>
      </div>
    </div>
  );
};

export default InfoBox;
