import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import Graph from "./Graph";
import CircularProgress from "@mui/material/CircularProgress";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Textfit } from "react-textfit";

const Wrapper = styled.div`
  padding: 5px;
  min-width: 10%;
  button {
    background: none;
    color: inherit;
    border: none;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    color: darkred;
    margin-top: auto;
  }
`;
const Cost = styled.h4`
  ${(props) => {
    if (props.myProps === "green")
      return `
        color: #03a811;

    `;
    if (props.myProps === "red")
      return `
      color:#781202;
    `;
  }}
`;

const CostWrapper = styled.div`
  display: flex;
  align-items: center;
`;

function CardWrapper({ isLoading, isBullish, qts, symbol, dHand, quotesData }) {
  const [showDel, setshowDel] = useState(false);
  return (
    <Wrapper>
      <Card
        onMouseEnter={() => setshowDel(true)}
        onMouseLeave={() => setshowDel(false)}
        sx={{
          bgcolor: "#08081b",
          color: "#d4d7e6",
          padding: "15px",
          borderRadius: "15px;",
          margin: "10px",
          width: "250px",
          height: "350px",
        }}
      >
        {isLoading && <CircularProgress />}
        {!isLoading && (
          <>
            <Textfit mode="multi">
              {quotesData.symbol} | {quotesData.longName}
            </Textfit>

            <h4>
              {quotesData.fullExchangeName} | {quotesData.currency}
            </h4>
            {quotesData.region}
            <CostWrapper>
              <Cost myProps={`${isBullish ? "green" : "red"}`}>{qts}</Cost>
              {isBullish && (
                <ArrowUpwardIcon
                  sx={{
                    color: "#03a811",
                  }}
                />
              )}
              {!isBullish && (
                <ArrowDownwardIcon
                  sx={{
                    color: "#781202",
                  }}
                />
              )}
            </CostWrapper>
            <Graph symbol={symbol} />
            {showDel && (
              <Button onClick={() => dHand(quotesData.symbol)}>
                <DeleteOutlineIcon />
              </Button>
            )}
          </>
        )}
      </Card>
    </Wrapper>
  );
}

export default CardWrapper;
