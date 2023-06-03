import React from "react";
import { format, subDays } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TextEmpty from "./TextEmpty";
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
  const [stocksData, setStocksData] = useState("");
  let days = 3;

  useEffect(async () => {
    const date = format(subDays(new Date(), days), "yyyy-MM-dd");
    const option = [stockArr, date];
    const res = await axios.get("/api/stocks", { params: option });
    setStocksData(res.data);
  }, []);
  const dates = [];
  const datasets = [];
  let closes = [];
  let percent = [];

  stocksData.length &&
    stocksData.forEach((ele, i) => {
      ele.forEach((el) => {
        dates.push(el["date"].slice(0, 10));
        closes.push(+el["adjClose"].toFixed(2));
      });
      closes.forEach((e, i, a) => {
        const diff = e - +a[i - 1];
        const incdec = +((diff / e) * 100).toFixed(2);
        percent.push(incdec);
      });
      percent[0] = 0;
      datasets.push({
        label: stockArr[i],
        data: percent,
        borderColor: "#" + Math.floor(Math.random() * 16777215).toString(16),
        borderWidth: 1.5,
        backgroundColor:
          "#" + Math.floor(Math.random() * 16777215).toString(16),
        pointRadius: 3.5,
        pointHoverBorderColor: "white",
        pointStyle: "circle",
      });
      closes = [];
      percent = [];
    });

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
    <>
      <StyledContainer>
        {stockArr.length === 0 && <TextEmpty text={"No Stocks To Show"} />}
        <LineContainer>
          <Line
            data={{
              labels: dates.slice(0, 20),
              datasets: datasets.map((el) => el),
            }}
            options={option}
          />
        </LineContainer>
      </StyledContainer>
    </>
  );
}

export default Comparestock;
