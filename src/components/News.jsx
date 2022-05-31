import React from "react";
import { useQuery } from "react-query";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import Tooltip from "@mui/material/Tooltip";
import { useState, useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Buttonwrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
`;

function News() {
  const [page, setPage] = useState(1);
  const myRef = useRef(null);
  const { data, error, isLoading, isPreviousData } = useQuery(
    ["NewsData", page],
    () => axios(`/news`, { params: page }),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      keepPreviousData: true,
    }
  );
  const handleChange = (event, value) => {
    setPage(value);
  };

  console.log(data);

  const scrollToTop = () => {
    myRef.current.scrollIntoView({ behavior: "smooth", inline: "nearest" });
  };

  if (error) return <h4>Error:{error.message}</h4>;
  if (isLoading)
    return <CircularProgress size={"100px"} sx={{ ml: "35%", mt: "20%" }} />;

  return (
    <div>
      <Wrapper ref={myRef}>
        {data.data.articles.map((article, index) => {
          return (
            <Card
              key={index}
              sx={{
                maxWidth: 345,
                margin: "10px",
                bgcolor: "#08081b",
                color: "gray",
                mt: "50px",
                ml: "20px",
              }}
              variant="temporary"
            >
              <CardMedia
                component="img"
                height="140"
                image={
                  article.urlToImage === null
                    ? "https://media.istockphoto.com/photos/online-news-in-mobile-phone-close-up-of-smartphone-screen-man-reading-picture-id1065782416?b=1&k=20&m=1065782416&s=170667a&w=0&h=DeacwxQl_KZdhtkk6eHxxGunzYuHLfi6S6rvM3CsVeg="
                    : article.urlToImage
                }
                alt="news"
              />
              <CardContent>
                <Tooltip title={article.title}>
                  <Typography gutterBottom variant="h7" component="div">
                    {article.title.slice(0, 75) + "..."}
                  </Typography>
                </Tooltip>
              </CardContent>
              <CardActions>
                <Button size="small" href={article.url}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Wrapper>
      <Buttonwrapper>
        <Button
          variant="contained"
          onClick={() => {
            setPage((old) => Math.max(old - 1, 1));
            scrollToTop();
          }}
          disabled={page === 1}
        >
          <ArrowBackIcon /> Previous Page
        </Button>
        <Pagination
          count={7}
          variant="outlined"
          color="secondary"
          page={page}
          onChange={handleChange}
          size="large"
        />
        <Button
          variant="contained"
          onClick={() => {
            if (!isPreviousData && page < 7) {
              setPage((old) => old + 1);
            }
            scrollToTop();
          }}
          disabled={isPreviousData || page === 7}
        >
          Next Page <ArrowForwardIcon />
        </Button>
      </Buttonwrapper>
    </div>
  );
}

export default News;
