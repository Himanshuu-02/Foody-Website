import React from "react";

function Body({ resName, cusine, cardRate, cardDetail, imgUrl,time,place ,near, rating}) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={imgUrl} alt={resName} />
      </div>
      <div className="Detail" >
        <h3 style={{ marginTop: "-10px", fontSize: "36px" }}>{resName}</h3>
        <h4 style={{ fontSize: "20px", marginTop: "23px", overflow: "hidden",flexWrap:"wrap" }}>{cusine}</h4>
        <h5 className="star-box" style={{ marginTop: "13px", fontSize: "19px" }}>⭐{cardRate} </h5>
        <p style={{ fontSize: "19px", marginTop: "11px" }}>{cardDetail} ({time})</p>
        {/* <p style={{ fontSize: "19px", marginTop: "11px" }}>{time} </p> */}
         <p style={{ fontSize: "20px", marginTop: "11px" }}>{near},{place} </p>
      </div>
      <button>Order Now</button>
    </div>
  );
}

export default Body;
