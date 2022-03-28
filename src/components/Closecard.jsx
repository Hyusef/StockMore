import React from "react";
import styled from "styled-components";
import { css } from "styled-components";
import Card from "@mui/material/Card";
import { useQuery } from "react-query";
import { subDays, format, getISODay } from "date-fns";
import Graph from "./Graph";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import axios from "axios";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
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

const CostWrapper = styled.div`
  display: flex;
  align-items: center;
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

function Closecard({ symbol }) {
  const [quotesData, setQuotesData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    axios
      .get("/quotes", { params: symbol })
      .then((res) => {
        setQuotesData(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let isBullish = false;
  const qts = quotesData.regularMarketPrice;
  const pqts = quotesData.regularMarketPreviousClose;
  if (qts > pqts) {
    isBullish = true;
  }
  console.log(showCard);

  return (
    <div>
      <Wrapper>
        <Card
          onMouseEnter={() => setShowCard(true)}
          onMouseLeave={() => setShowCard(false)}
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
                {isBullish && <ArrowUpwardIcon sx={{ color: "#03a811" }} />}
                {!isBullish && <ArrowDownwardIcon sx={{ color: "#781202" }} />}
              </CostWrapper>
              <Graph symbol={symbol} />
              {showCard && (
                <Button>
                  <DeleteOutlineIcon />
                </Button>
              )}
            </>
          )}
        </Card>
      </Wrapper>
    </div>
  );
}

// {fiSuccess?<Cost className="banana">{parseFloat(fiData['Time Series (Daily)'][formattedDate]['1. open']).toFixed(2)}</Cost>:"hello there"}

export default Closecard;
