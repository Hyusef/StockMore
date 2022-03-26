import React from "react";
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
import { useQuery } from "react-query";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
  Legend
);

function Graph() {
  const { data, error } = useQuery(
    "stock data",
    () =>
      axios(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=${process.env.REACT_APP_STOCK_API_KEY}&outputsize=compact`
      ),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      staleTime: 1000000,
      cacheTime: 1000000000,
    }
  );

  console.log(data);

  const banana = [];
  const rats = [];
  if (error) {
    return <h1>Error:{error.message}</h1>;
  }

  if (data === undefined) {
    return <CircularProgress />;
  }

  for (var key in data.data["Time Series (Daily)"]) {
    banana.push(key);
    rats.push(data.data["Time Series (Daily)"][key]["1. open"]);
  }

  banana.splice(7);
  rats.splice(7);

  return (
    <div>
      <Line
        data={{
          labels: banana,
          datasets: [
            {
              label: "Open",
              data: rats,
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ],
        }}
      />
    </div>
  );
}

export default Graph;
