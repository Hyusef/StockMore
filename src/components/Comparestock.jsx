import React from "react";
import { format, subDays } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TextEmpty from './TextEmpty'

import { Line } from "react-chartjs-2";
import axios from "axios";


const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  background: #2d3436;
`;

const LineContainer = styled.div`
  padding: 20px;
`;

function Comparestock({ stockArr }) {
  const [stocksData, setStocksData] = useState([]);
  let days = 3;
  let pastSeven = 7;
  let pastMonth = 31;
  let pastYear = 365;

  useEffect(() => {
    const date = format(subDays(new Date(), days), "yyyy-MM-dd");
    const option = [stockArr, date];
    axios.get("/stocks", { params: option }).then((res) => {
      setStocksData(res.data);
    });
  }, []);

  const dates = [];
  const datasets = [];
  let closes = [];
  let percentMain = [];
  let percent = [];

  stocksData.forEach((ele, i) => {
    ele.forEach((el) => {
      dates.push(el["date"].slice(0, 10));
      closes.push(+el["adjClose"].toFixed(2));
    });
    closes.forEach((e, i, a) => {
      const diff = e - a[i - 1];
      const incdec = +((diff / e) * 100).toFixed(3);
      percent.push(incdec);
    });
    datasets.push({
      label: stockArr[i],
      data: percent,
      borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      borderWidth: 1.5,
      backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
      pointRadius: 3.5,
      pointHoverBorderColor: "white",
      pointStyle: "circle",
    });
    percentMain.push(percent);
    closes = [];
    percent = [];
  });

  percentMain
    .join(",")
    .replace("NaN", "0")
    .split(",")
    .map((el) => +el);

  // datasets.map(el=>console.log(el));

  //label == stockarr[0]
  //labels == dates
  const option = {
    plugins: {
      interaction: {
        mode: "index",
        intersect: false,
      },
      tooltip: {
        callbacks: {},
      },
    },
    scales: {
      y: {
        title: {
          display: true,
          text: "Value",
        },

        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <StyledContainer>
      {stocksData.length > 0 ? (
        <LineContainer>
          <Line
            data={{
              labels: dates.slice(0, 20),
              datasets: datasets.map((el) => el),
            }}
            options={option}
          />
        </LineContainer>
      ) : (
        <TextEmpty text={'No Stocks To Show.'} />
      )}
    </StyledContainer>
  );
}

export default Comparestock;
