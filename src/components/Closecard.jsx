import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import { useQuery } from "react-query";
import { subDays, format, getISODay } from "date-fns";
import Graph from "./Graph";
import CircularProgress from "@mui/material/CircularProgress";
import { useEffect, useState } from "react";
import axios from "axios";

const Wrapper = styled.div`
  padding: 5px;
  min-width: 10%;
`;

const Cost = styled.h4`
  color: #118c4f;
`;

function Closecard(props) {
  const [quotesData, setQuotesData] = useState([]);

  useEffect(() => {
    axios
      .get("/quotes",{params:"FB"})
      .then((res) => {
        setQuotesData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(quotesData);

  return (
    <div>
      <Wrapper>
        <Card
          sx={{
            bgcolor: "#08081b",
            color: "#d4d7e6",
            padding: "15px",
            borderRadius: "15px;",
            margin: "10px",
            width: "250px",
          }}
        >
          <h3>
            {quotesData.symbol} | {quotesData.longName}
          </h3>
          <h4>
            {quotesData.fullExchangeName} | {quotesData.currency}
          </h4>
          {quotesData.region}
          <Cost className="banana">{quotesData.regularMarketPrice}</Cost>
          <Graph />
        </Card>
      </Wrapper>
    </div>
  );
}

// {fiSuccess?<Cost className="banana">{parseFloat(fiData['Time Series (Daily)'][formattedDate]['1. open']).toFixed(2)}</Cost>:"hello there"}

export default Closecard;
