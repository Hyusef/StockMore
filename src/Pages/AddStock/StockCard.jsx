import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

const Addbutton = styled(Button)`
  background: #c9c9c9;
  width: 100%;
  color: black;
`;

const StyledPaper = styled(Paper)`
 background:rgba(0, 0, 0, 0.35);
  margin: 10px;
  width: 250px;
  margin-bottom: 50px;
  height: 180px;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 2px;
  align-items: center;
  Button {
    margin-top: auto;
  }
`;


const Paperh3 = styled.h5`
  margin-top: 5px;
  color: #f5f6fa;
`

function StockCard({ company, handleArray, handleAlert }) {
  return (
    <>
      <StyledPaper>
        <Paperh3>{company["exchange"]}</Paperh3>
        <Paperh3>{company["shortname"]}</Paperh3>
        <Paperh3>{company["symbol"]}</Paperh3>
        <Addbutton
          variant="contained"
          onClick={() =>
            handleArray(company["symbol"], handleAlert(company["symbol"]))
          }
        >
          <AddIcon />
          Add to Dashboard
        </Addbutton>
      </StyledPaper>
    </>
  )
}

export default StockCard


