import React from 'react'
import {Container, Box, IconButton, Typography} from "@mui/material";



const Footer = () => {
  return (
    <Box
    width="80%"
    margin="auto"
    display="flex"
    justifyContent="space-between"
    rowGap="30px"

    >
    <Typography mb="30px">Careers</Typography>
    <Typography mb="30px">Our Stores</Typography>
    <Typography mb="30px">Terms & Conditions</Typography>
    <Typography mb="30px">Privacy Policy</Typography>

    </Box>


  )
}

export default Footer