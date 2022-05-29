import React from "react";
import Closecard from "./Closecard";
import styled from "styled-components";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextEmpty from "./TextEmpty";

const CloseCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  justify-content: flex-start;
  box-sizing: border-box;

  @media (max-width: 600px) {
    justify-content: center;
    padding: 50px;
    margin: 25px;
  }
`;

const Flexdiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  button {
    margin: 15px;
  }
`;

function Mainstocks({ stockArr, dHand }) {
  const [showMore, setShowMore] = useState(false);
  const showHandler = (event) => {
    event.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <Flexdiv>
      <CloseCardWrapper>
        {!showMore &&
          stockArr.slice(0, 3).map((el) => {
            return <Closecard key={el} symbol={el} dHand={dHand} />;
          })}
        {showMore &&
          stockArr.map((el) => {
            return <Closecard key={el} symbol={el} dHand={dHand} />;
          })}
      </CloseCardWrapper>
      <div>
        {stockArr.length > 3 && (
          <Button variant="text" onClick={showHandler}>
            {showMore ? "Hide" : "Show more"}
          </Button>
        )}
        {stockArr.length === 0 && (
          <TextEmpty text={"Your Dashboard is Empty."} />
        )}
      </div>
    </Flexdiv>
  );
}

export default Mainstocks;
