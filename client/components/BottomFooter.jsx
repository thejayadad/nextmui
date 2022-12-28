import React from 'react'
import {Container, Box, IconButton, Typography} from "@mui/material";
import pay from "../public/pay.png"
import Image from 'next/image'


const BottomFooter = () => {
  return (
    <Box
    width="80%"
    margin="auto"
    display="flex"
    justifyContent="center"
    flexDirection="column"
    alignItems="center"
    backgroundColor="#f5f5f5"

    >
        <Typography
        textAlign="center"
        marginBottom="10px"
        >
            Payment Options We Support
        </Typography>
    <Image
    width="100%"
    src={pay} alt='payment options'


    />

    </Box>
  )
}

export default BottomFooter