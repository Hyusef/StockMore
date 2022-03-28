import TextField from "@mui/material/TextField";
import { useQuery } from "react-query";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import { el } from "date-fns/locale";
import Swal from "sweetalert2";

const PaperContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;
  margin: 80px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  align-items: center;
  background: #dedede;
`;
const StyledPaper = styled(Paper)`
  background: #346beb;
  margin: 10px;
  width: 250px;
  margin-bottom: 50px;
  height: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;

  Button {
    margin-top: auto;
  }
`;

const CompareContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const InputSearchBox = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
`;

const Addbutton = styled(Button)`
  background: #c9c9c9;
  width: 100%;
  color: black;
`;
const Paperh3 = styled.h5`
  margin-top: 5px;
  color: #f5f6fa;
`;
function Compare(props) {
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState("");
  const [open, setOpen] = useState(false);
  const inputsref = useRef("");

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

  const handleAlert = (symbol) => {
    Swal.fire({
      title: "Sucess",
      heightAuto: false,
      timer: 650,
      showConfirmButton: false,
    });
  };

  return (
    <CompareContainer>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

        <InputSearchBox>
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
        </InputSearchBox>
      </Container>
      {searchData
        ? searchData.quotes.length == 0 && <h1>Enter valid symbol</h1>
        : ""}

      <PaperContainer>
        {bestMatch.map((ele, i) => {
          return (
            <StyledPaper key={i}>
              <Paperh3>{ele["exchange"]}</Paperh3>
              <Paperh3>{ele["shortname"]}</Paperh3>
              <Paperh3>{ele["symbol"]}</Paperh3>

              <Addbutton
                variant="contained"
                onClick={() =>
                  props.handleArray(ele["symbol"], handleAlert(ele["symbol"]))
                }
              >
                <AddIcon />
                Add to Dashboard
              </Addbutton>
            </StyledPaper>
          );
        })}
      </PaperContainer>
    </CompareContainer>
  );
}

export default Compare;

//https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=tesco&apikey=demo
