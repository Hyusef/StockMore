import React from "react";
import styled from "styled-components";
import Card from "@mui/material/Card";
import { useQuery } from "react-query";
import { subDays, format, getISODay } from "date-fns";
import Graph from "./Graph";
import CircularProgress from "@mui/material/CircularProgress";
const axios = require("axios");

const Wrapper = styled.div`
  padding: 5px;
  min-width: 10%;
`;

const Cost = styled.h4`
  color: #118c4f;
`;

function Closecard(props) {
  const fetchAll = async () => {
    let fetchData;
    await axios
      .get(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=${process.env.REACT_APP_STOCK_API_KEY}`
      )
      .then((res) => (fetchData = res.data));
    return fetchData;
  };
  const fetchFinance = async () => {
    let fetchData;
    await axios
      .get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.REACT_APP_STOCK_API_KEY}`
      )
      .then((res) => (fetchData = res.data));
    return fetchData;
  };
  const { isLoading, error, data, isSuccess } = useQuery(
    "financial overview",
    fetchAll,
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 1000000,
      cacheTime: 1000000000,
    }
  );
  const {
    data: fiData,
    isSuccess: fiSuccess,
    error: error1,
    isLoading: isLoading1,
  } = useQuery("financial data", fetchFinance, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });
  const date = new Date();

  let yesterday;
  if (getISODay(date) === 7) {
    yesterday = subDays(date, 2);
  } else if (getISODay(date) === 1) {
    yesterday = subDays(date, 3);
  } else {
    yesterday = subDays(date, 1);
  }
  const formattedDate = format(yesterday, "yyyy-MM-dd");
  //const formattedDate = fiData["Meta Data"]["3. Last Refreshed"]

  if (isLoading || isLoading1) {
    return <CircularProgress size={"100px"} sx={{ ml: "50%" }} />;
  }

  if (error1 || error) {
    return <h1>Error!</h1>;
  }

  if (fiData === undefined) {
    return <h1>Error undefined fidata</h1>;
  }
  return (
    <div>
      <Wrapper>
        {isSuccess ? (
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
              {data.Symbol} | {data.Name}
            </h3>
            <h4>
              {data.Exchange} | {data.Sector}
            </h4>
            <p>{data.Country}</p>
            {fiSuccess ? (
              <Cost className="banana">
                {parseFloat(
                  fiData["Time Series (Daily)"][formattedDate]["1. open"]
                ).toFixed(2)}
              </Cost>
            ) : (
              "hello there"
            )}
            <Graph />
          </Card>
        ) : (
          <Card>hello There</Card>
        )}
      </Wrapper>
    </div>
  );
}

// {fiSuccess?<Cost className="banana">{parseFloat(fiData['Time Series (Daily)'][formattedDate]['1. open']).toFixed(2)}</Cost>:"hello there"}

export default Closecard;
