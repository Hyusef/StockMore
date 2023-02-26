import React from "react";
import styled from "styled-components";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextEmpty from "../../components/TextEmpty";
import InfoContainer from "./InfoContainer";

const CloseCardWrapper = styled.div`
display: flex;
  flex-wrap: wrap;
  width: 75vw;
  justify-content: flex-start;
  box-sizing: border-box;
  justify-content:space-around;
  @media (max-width: 600px) {
    justify-content: center;
    padding: 50px;
    margin: 25px;
  }
`;

const Flexdiv = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  width: 100%;
  button {
    margin: 15px;
  }
`;

function SelectedStocks({ stockArr, dHand }) {
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
                        return <InfoContainer key={el} symbol={el} dHand={dHand} />;
                    })}
                {showMore &&
                    stockArr.map((el) => {
                        return <InfoContainer key={el} symbol={el} dHand={dHand} />;
                    })}
            </CloseCardWrapper>
            <div>
                {stockArr.length > 3 && (
                    <Button variant="text" onClick={showHandler}>
                        {showMore ? "Hide" : "Show more"}
                    </Button>
                )}
                {stockArr.length === 0 && (
                    <TextEmpty text={"Your Dashboard is Empty"} />
                )}
            </div>
        </Flexdiv>
    );
}

export default SelectedStocks;
