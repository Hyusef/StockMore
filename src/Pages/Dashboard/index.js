import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import StocksCardContainer from "./StocksCardContainer";
import ListsContainer from "./ListsContainer";

const Flexdiv = styled.div`
  display: flex;
  align-items:center;
  flex-direction: column;
  width: 100%;
  button {
    margin: 15px;
  }
`;

const TrackButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: #FCFCFD;
  border-radius: 4px;
  border-width: 0;
  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,rgba(45, 35, 66, 0.3) 0 7px 13px -3px,#D6D6E7 0 -3px 0 inset;
  box-sizing: border-box;
  color: #36395A;
  cursor: pointer;
  display: inline-flex;
  font-family: "JetBrains Mono",monospace;
  height: 48px;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 16px;
  padding-right: 16px;
  position: relative;
  text-align: left;
  text-decoration: none;
  transition: box-shadow .15s,transform .15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow,transform;
  font-size: 18px;

&:focus {
  box-shadow: #D6D6E7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
}

&:disabled {
    opacity:10%;
  }
  

&:hover {
  box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #D6D6E7 0 -3px 0 inset;
  transform: translateY(-2px);
}

&:active {
  box-shadow: #D6D6E7 0 3px 7px inset;
  transform: translateY(2px);
}`


const CloseCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75vw;
  justify-content: flex-start;
  box-sizing: border-box;
  @media (max-width: 600px) {
    justify-content: center;
    padding: 50px;
    margin: 25px;
  }
`;

function SelectedStocks({ stockArr, dHand, handleArray }) {
  const [showMore, setShowMore] = useState(false);
  const [chosen, setChosen] = useState(0);
  const [initialAdded, setInitialAdded] = useState([]);
  const showHandler = (event) => {
    event.preventDefault();
    setShowMore(!showMore);
  };

  const handleStockFetch = (e) => {
    e.map(ele => handleArray(ele));
    console.log(stockArr);
  }


  useEffect(() => {
    console.log(stockArr);
  }, [stockArr, initialAdded, chosen]);
  return (
    <Flexdiv>
      {stockArr.length < 3 && <>
        <h3 style={{ color: '#cccccc', fontFamily: 'Ibm Plex Sans' }}>
          Choose atleast 3 stocks from the lists below
        </h3>
        <h4 style={{ color: '#cccccc', margin: '0px' }} >You have added {chosen} stocks</h4>
        <TrackButton disabled={!(chosen >= 3)} onClick={() => handleStockFetch(initialAdded)}>Track Stocks</TrackButton>
        <ListsContext.Provider value={{ setChosen, chosen, initialAdded, setInitialAdded, handleArray }}>
          <ListsContainer />
        </ListsContext.Provider>
      </>
      }
      <CloseCardWrapper>
        {!showMore &&
          stockArr.slice(0, 3).map((el) => {
            return <StocksCardContainer key={el} symbol={el} dHand={dHand} />;
          })}
        {showMore &&
          stockArr.map((el) => {
            return <StocksCardContainer key={el} symbol={el} dHand={dHand} />;
          })}
      </CloseCardWrapper>
      <div>
        {stockArr.length > 3 && (
          <Button variant="text" onClick={showHandler}>
            {showMore ? "Hide" : "Show more"}
          </Button>
        )}
        {/*     {stockArr.length === 0 && (
          <TextEmpty text={"Your Dashboard is Empty."} />
        )} */}
      </div>



    </Flexdiv>
  );
}

export const ListsContext = React.createContext();
export default SelectedStocks;
