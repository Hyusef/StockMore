import React from "react";
import { useState, useEffect } from "react";
import { format, subDays } from "date-fns";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend
);

function StockInfoGraph({ symbol }) {
    const [histData, setHistData] = useState([]);
    useEffect(() => {
        const pastWeek = format(subDays(new Date(), 7), "yyyy-MM-dd");
        const option = [symbol, pastWeek];
        axios.get("/stock", { params: option }).then((res) => {
            setHistData(res.data);
        });
    }, [symbol]);
    const closes = [];
    const dates = [];
/*     if (histData.length) {
        histData?.forEach((el) => {
            const histDate = el["date"].slice(0, 10);
            dates.push(histDate);
            const histClose = +el["adjClose"].toFixed(2);
            closes.push(histClose);
       
    })}; */
    console.log(histData)
    return (
        <div>
  {/*           <Line
                data={{
                    labels: dates,
                    datasets: [
                        {
                            label: "Close",
                            data: closes,
                            fill: false,
                            borderColor: "rgb(75, 192, 192)",
                            tension: 0.1,
                        },
                    ],
                }}
            /> */}
        </div>
    );
}

export default StockInfoGraph;
