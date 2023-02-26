import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import StocksInfoCard from './StocksInfoCard';
function InfoContainer({ symbol, dHand }) {
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
    }, [symbol]);

    let isBullish = false;
    const qts = quotesData.regularMarketPrice;
    const pqts = quotesData.regularMarketPreviousClose;
    if (qts > pqts) {
        isBullish = true;
    }
    return (
        <div>
            <StocksInfoCard
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

export default InfoContainer;
