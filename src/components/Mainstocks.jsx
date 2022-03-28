import React from "react";
import Closecard from "./Closecard";
import styled from "styled-components";
import { useState } from "react";
import Button from "@mui/material/Button";
const CloseCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  justify-content: flex-start;
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

  const showHandler = (event) => {
    event.preventDefault();
    setShowMore(!showMore);
  };

  return (
    <Flexdiv>
      <CloseCardWrapper>
        {!showMore &&
          stockArr.slice(0, 3).map((el) => {
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
