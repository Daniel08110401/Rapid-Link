import { Box } from '@mui/material'
import React from 'react'
import Footer from '../component/Footer'
import NavbarGlass from '../component/NavbarGlass'

const NotFound = () => {
    return (
        <>
            <NavbarGlass />
            <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center" }}>
                <h1>Page not found!</h1>
            </Box>
            <Footer />
        </>
    )
}

export default NotFound