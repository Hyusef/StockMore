import React from "react";
import { format, subDays, isDate } from "date-fns";
import { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";

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

  stocksData.forEach((ele) => {
    ele.forEach((el) => {
      dates.push(el["date"].slice(0, 10));
      closes.push(+el["adjClose"].toFixed(2));
    });
    closes.map((e, i, a) => {
      const diff = e - a[i - 1];
      const incdec = +((diff / e) * 100).toFixed(3);
      percent.push(incdec);
    });
    datasets.push({
      label: "close",
      data: percent,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
      borderWidth: 2,
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

  return (
    <div style={{ width: "70vw", height: "90vh" }}>
      <Line
        data={{
          labels: dates.slice(0, 20),
          datasets: datasets.map((el) => el),
        }}
        options={{
          maintainAspectRatio: false,
          responsive: true,
        }}
      />
    </div>
  );
}

export default Comparestock;
