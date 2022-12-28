import React from 'react'
import Product from './Product'
import {Container, Box, IconButton, Typography} from "@mui/material";




const Main = () => {
  return (
    <Box
    width="80%"
    margin="80px auto"
    >
    <Typography
    fontFamily="cinzel"
    variant='h3'
    textAlign="center"
    >Featured Items
    </Typography>
    <Box
    margin="0 auto"
    display="grid"
    gridTemplateColumns="repeat(auto-fill, 300px)"
    justifyContent="space-around"
    rowGap="20px"
    columnGap="1.33%"
    >
        <Product />
        <Product />
        <Product />
        <Product />

    </Box>

    </Box>
  )
}

export default Main