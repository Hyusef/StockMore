import React from "react";
import { format, subDays } from "date-fns";
import { useEffect, useState } from "react";
import styled from "styled-components";
import TextEmpty from "../../components/TextEmpty";
import axios from "axios";
import StocksChart from "./StocksChart";
import { Select, MenuItem, InputLabel } from "@mui/material";


const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  margin: auto;
  background: #2d3436;
`;

//Add options to choose from different dates and handle it in the backend
function Comparestock({ stockArr }) {
    const [stocksData, setStocksData] = useState("");
    const [days, setDays] = useState(8);

    const handleDayChange = (e) => {
        setDays(e.target.value);
    }
    console.log(days);


    useEffect(() => {
        const date = format(subDays(new Date(), days), "yyyy-MM-dd");
        const option = [stockArr, date];
        async function fetchStocksData() {
            try {
                const res = await axios.get("/stocks", { params: option });
                setStocksData(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchStocksData();
    }, [days, stockArr]);

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

    return (
        <>
            <StyledContainer>
                {stockArr.length === 0 && <TextEmpty text={"No Stocks To Show"} />}
                <StocksChart datasets={datasets} dates={dates} />
                <InputLabel id="demo" style={{ marginLeft: '35vw',color:'hsl(210, 105%, 92%)' }}>Choose Date</InputLabel>
                <Select
                    onChange={handleDayChange}
                    labelId="demo"
                    style={{ width: '150px', marginLeft: '35vw',color:'hsl(210, 105%, 92%)' }}>

                    <MenuItem disabled value="">
                        <em>Choose one of the date values</em>
                    </MenuItem>
                    <MenuItem value={2}>1D</MenuItem>
                    <MenuItem value={8}>1W</MenuItem>
                    <MenuItem value={31}>1M</MenuItem>
                    <MenuItem value={181}>6M</MenuItem>
                    <MenuItem value={366}>1Y</MenuItem>
                </Select>
            </StyledContainer>
        </>
    );
}

export default Comparestock;
