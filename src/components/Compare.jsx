import TextField from "@mui/material/TextField";
import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { el } from "date-fns/locale";

const PaperContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  flex-wrap: wrap;
  background-color: black;
  justify-content: space-around;
  overflow: hidden;
  margin: 30px;
`;
const CompareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Paperh3 = styled.h3`
  margin-top: 5px;
  color: #f5f6fa;
`;
function Compare(props) {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState("");
  const inputsref = useRef("");
  const textRefs = useRef([]);

  let bestMatch = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(inputsref.current.value);
    bestMatch = [];
  };

  const clickHandler = (e) => {
    props.clickhandler();
  };
  useEffect(() => {
    axios
      .get("/search", { params: input })
      .then((res) => {
        setSearchData(res.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  if (searchData) {
    searchData.quotes.map((ele) => {
      if (ele["isYahooFinance"] === true) {
        bestMatch.push(ele);
      }
    });
  }
  console.log(bestMatch);

  return (
    <CompareContainer>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid blue",
          }}
        >
          <Typography component="h1" variant="h5">
            Add Stock
          </Typography>
          <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            sx={{ mt: 5 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="symbol"
              label="Stock Symbol / Stock Name"
              name="stock"
              autoComplete="stock"
              autoFocus
              inputRef={inputsref}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Search Stock
            </Button>
          </Box>
        </Box>
      </Container>

      <PaperContainer>
        {bestMatch.map((ele, i) => {
          return (
            <Paper
              sx={{
                bgcolor: "#2c3e50",
                m: "10px",
                width: "250px",
                mb: "50px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Paperh3>{ele["exchange"]}</Paperh3>
              <Paperh3>{ele["shortname"]}</Paperh3>
              <Paperh3>{ele["symbol"]}</Paperh3>

              <Button
                sx={{ bgcolor: "darkblue", width: "100%" }}
                variant="contained"
                onClick={() => props.handleArray(ele["symbol"])}
              >
                <AddIcon />
                Add to Dashboard
              </Button>
            </Paper>
          );
        })}
      </PaperContainer>
    </CompareContainer>
  );
}

export default Compare;

//https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo
