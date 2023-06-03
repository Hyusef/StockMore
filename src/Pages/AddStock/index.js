import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Container from "@mui/material/Container";
import styled from "styled-components";
import Swal from "sweetalert2";
import StockCardsContainer from "./StockCardsContainer";
import StockCard from "./StockCard";
import StockSearchForm from "./StockSearchForm";


const AddStockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

function Addstock(props) {
    const [input, setInput] = useState("");
    const [searchData, setSearchData] = useState("");
    const inputsref = useRef("");
    let bestMatch = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        setInput(inputsref.current.value);
        bestMatch = [];
    };

    useEffect(() => {
        axios
            .get("/api/search", { params: input })
            .then((res) => {
                setSearchData(res.data);
            })
            .catch((err) => console.log(err));

    }, [input]);

    if (searchData) {
        searchData?.quotes?.map((ele) => {
            if (ele["isYahooFinance"] === true) {
                bestMatch.push(ele);
            }
        });
    }

    const handleAlert = () => {
        Swal.fire({
            title: "Sucess",
            heightAuto: false,
            timer: 650,
            showConfirmButton: false,
        });
    };

    return (
        <AddStockContainer>
            <Container component="main" maxWidth="xs">
                <StockSearchForm handleSubmit={handleSubmit} inputsref={inputsref} />
            </Container>
            {searchData
                ? searchData.quotes.length == 0 && <h1>Enter Valid Symbol</h1>
                : ""}
            <StockCardsContainer>
                {bestMatch.map((company, i) => {
                    return (
                        <StockCard company={company}
                            handleArray={props.handleArray}
                            handleAlert={handleAlert} />
                    );
                })}
            </StockCardsContainer>
        </AddStockContainer>
    );
}

export default Addstock;
