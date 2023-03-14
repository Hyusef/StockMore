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
  border-radius:5px;
  background:rgba(3.1%,3.1%,10.6%,0.3);
  /* background:rgba(0, 0, 0, 0.3); */
  color:#cccccc;
`;


const TextfieldStyle = {
    input: { color: '#cccccc' },

    "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "#cccccc",
        }
    }
}

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
                    sx={TextfieldStyle}
                    InputLabelProps={{
                        style: { color: '#ccc', },
                    }}
                />

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, background: "linear-gradient(to right, #7f7fd5, #86a8e7, #91eae4)" }}
                    onClick={handleClick}
                >
                    Search Stock
                </Button>
            </Box>
        </InputSearchBox>
    )
}

export default StockSearchForm
