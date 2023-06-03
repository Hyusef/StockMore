import React from "react";
import { useQuery } from "react-query";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { useState, useRef } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import NewsPagination from "./NewsPagination";

const NewsCardsWrapper = styled.div` 
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

function News() {
    const [page, setPage] = useState(1);
    const myRef = useRef(null);
    const { data, error, isLoading, isPreviousData } = useQuery(
        ["NewsData", page],
        () => axios(`/api/biznews`, { params: page }),
        {
            refetchOnWindowFocus: false,
            refetchOnMount: false,
            keepPreviousData: true,
        }
    );

        console.log(data)


    const handleChange = (_, value) => {
        setPage(value);
    };

    const scrollToTop = () => {
        myRef.current.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    };

    if (error) return <h4>Error:{error.message}</h4>;
    if (isLoading)
        return <CircularProgress size={"100px"} sx={{ ml: "35%", mt: "20%" }} />;

    return (
        <div>
          {/*   <NewsCardsWrapper ref={myRef}>
                {data?.data?.map((article, index) => {
                    return (
                        <NewsCard key={index} article={article} />
                    );
                })}
            </NewsCardsWrapper> */}
            <NewsPagination page={page} setPage={setPage}
                isPreviousData={isPreviousData}
                handleChange={handleChange}
                scrollToTop={scrollToTop} />

        </div>
    );
}

export default News;

