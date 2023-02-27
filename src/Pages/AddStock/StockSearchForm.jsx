import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styled from "styled-components";

const InputSearchBox = styled.div`
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
  background: darkgray;
`;

const handleClick = () => {
    console.log('test');
}

function StockSearchForm({ handleSubmit, inputsref }) {
    return (
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
                    id="Stock Symbol or Stock Name"
                    label="Stock Symbol or Stock Name"
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
                    onClick={handleClick}
                >
                    Search Stock
                </Button>
            </Box>
        </InputSearchBox>
    )
}

export default StockSearchForm
