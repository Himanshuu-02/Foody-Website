import React from "react";
import { useRouteError } from "react-router-dom";

const Eroor = () => {
  const err = useRouteError();
  return (
    <div >
      <center style={{marginTop: "20%"}}>
        <h1>Oops</h1>
        <h2>Something went wrong</h2>
        <h1>
          {err.status} : {err.statusText}
        </h1>
      </center>
    </div>
  );
};

export default Eroor;
