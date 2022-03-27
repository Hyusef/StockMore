import React from "react";
import Closecard from "./Closecard";

function Mainstocks({ stockArr }) {
  return (
    <div>
      {stockArr.map((el) => {
        return <Closecard key={el} symbol={el} />;
      })}
    </div>
  );
}

export default Mainstocks;
