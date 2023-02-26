import React from 'react'
import styled from 'styled-components';
import Button from "@mui/material/Button";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Pagination from '@mui/material/Pagination';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Buttonwrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
  margin-bottom: 30px;
`;
function NewsPagination({ scrollToTop, setPage, page, isPreviousData, handleChange }) {
    return (
        <>
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
        </>
    )
}

export default NewsPagination