import React from "react";
import Closecard from "./Closecard";
import styled from "styled-components";
import { useState } from "react";
import Button from "@mui/material/Button";

const CloseCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 70vw;
  justify-content: space-between;

  box-sizing: border-box;
`;

const Flexdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  button {
    margin: 15px;
  }
`;

function Mainstocks({ stockArr }) {
  const [showMore, setShowMore] = useState(false);
  const fragmentArr = stockArr.slice(0, 3);

  const showHandler = () => {
    setShowMore(!showMore);
  };

  return (
    <Flexdiv>
      <CloseCardWrapper>
        {!showMore &&
          fragmentArr.map((el) => {
            return <Closecard key={el} symbol={el} />;
          })}
        {showMore &&
          stockArr.map((el) => {
            return <Closecard key={el} symbol={el} />;
          })}
      </CloseCardWrapper>
      <div>
        {stockArr.length > 3 && (
          <Button variant="text" onClick={showHandler}>
            {showMore ? "Hide" : "Show more"}
          </Button>
        )}
      </div>
    </Flexdiv>
  );
}

export default Mainstocks;
