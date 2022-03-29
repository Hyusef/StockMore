import React from "react";
import { format, subDays } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";

import { Line } from "react-chartjs-2";
import axios from "axios";

const StyledContainer = styled.div`
  width: 80vw;
  height: 100vh;
  margin: auto;
  margin-top: 40px;
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
      borderWidth: 3,
      backgroundColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
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

  //console.log(dates)
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
      <Line
        data={{
          labels: dates.slice(0, 20),
          datasets: datasets.map((el) => el),
        }}
        options={option}
      />
    </StyledContainer>
  );
}

export default Comparestock;
