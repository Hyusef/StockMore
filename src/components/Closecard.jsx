import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CardWrapper from "./CardWrapper";
function Closecard({ symbol, dHand }) {
  const [quotesData, setQuotesData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    axios
      .get("/quotes", { params: symbol })
      .then((res) => {
        setQuotesData(res.data);
        setTimeout(() => {
          setIsLoading(false);
        }, 500);
      })
      .catch((err) => console.log(err));
  }, []);

  let isBullish = false;  
  const qts = quotesData.regularMarketPrice;
  const pqts = quotesData.regularMarketPreviousClose;
  if (qts > pqts) {
    isBullish = true;
  }
  return (
    <div>
      <CardWrapper
        isLoading={isLoading}
        isBullish={isBullish}
        qts={qts}
        symbol={symbol}
        dHand={dHand}
        quotesData={quotesData}
      />
    </div>
  );
}

export default Closecard;
