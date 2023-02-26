import React from 'react'
import styled from "styled-components";
import { Line } from "react-chartjs-2";

const LineContainer = styled.div`
  padding: 20px;
`;

const chartOptions = {
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


function StocksChart({ dates, datasets }) {
    return (
        <>
            <LineContainer>
                <Line
                    data={{
                        labels: dates.slice(0, 20),
                        datasets: datasets.map((el) => el),
                    }}
                    options={chartOptions}
                />
            </LineContainer>
        </>
    )
}

export default StocksChart