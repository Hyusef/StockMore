import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import StocksInfoCard from './StocksInfoCard.jsx';

function StocksCardContainer({ symbol, dHand }) {
    const [quotesData, setQuotesData] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    useEffect(() => {
        axios
            .get("/api/quotes", { params: symbol })
            .then((res) => {
                setQuotesData(res.data);
                setTimeout(() => {
                    setIsLoading(false);
                }, 500);
                console.log(res.data);
            })
            .catch((err) => console.log(err));  
    }, [symbol]);

    let isBullish = false;
    const qts = quotesData?.price?.regularMarketPrice;
    const pqts = quotesData?.price?.regularMarketPreviousClose;
    if (qts > pqts) {
        isBullish = true;
    }
    return (
        <>
            <StocksInfoCard
                isLoading={isLoading}
                isBullish={isBullish}
                qts={qts}
                symbol={symbol}
                dHand={dHand}
                quotesData={quotesData}
            />

        </>
    );
}

export default StocksCardContainer;
