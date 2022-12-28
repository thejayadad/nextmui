import React from 'react'
import {Container, Box, IconButton} from "@mui/material";
import { AiOutlineShopping } from 'react-icons/ai'


const Navbar = () => {
  return (
    <Box
    display="flex"
    alignItems="center"
    width="100%"
    height="60px"
    backgroundColor="rgba(255, 255, 255, 0.95)"
    color="black"
    position="fixed"
    top="0"
    left="0"
    zIndex="1"
    >
    <Box
    width="80%"
    margin="auto"
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    >
    <Box

    >
        <IconButton>
            Kera Kouture
        </IconButton>
    </Box>
    <Box
    display="flex"
    justifyContent="space-between"
    columnGap="20px"
    zIndex="2"
    >

    <IconButton>
    <AiOutlineShopping />

    </IconButton>
    </Box>
    </Box>

    </Box>
  )
}

export default Navbar