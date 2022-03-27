import React from "react";
import Closecard from "./Closecard";
import styled from "styled-components";
import { useState } from "react";

const CloseCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
  justify-content: space-between;
  .hide {
    display: hidden;
  }
`;

function Mainstocks({ stockArr }) {
  const [showMore, setShowMore] = useState(false);
  const fragmentArr = stockArr.slice(0, 3);
  console.log(fragmentArr, stockArr, showMore);

  const showHandler = () => {
    setShowMore(!showMore);
  };

  return (
    <CloseCardWrapper>
      {!showMore &&
        fragmentArr.map((el) => {
          return <Closecard key={el} symbol={el} />;
        })}
      {showMore &&
        stockArr.map((el) => {
          return <Closecard key={el} symbol={el} />;
        })}
      <button onClick={showHandler}>{showMore ? "Hide" : "Show more"}</button>
    </CloseCardWrapper>
  );
}

export default Mainstocks;
