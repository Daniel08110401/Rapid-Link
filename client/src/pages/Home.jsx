import React,  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

// From Components file
import Header from '../component/Header';
import Footer from '../component/Footer';
import NavbarGlass from '../component/NavbarGlass';
import Filterbar from '../component/Filterbar';

// From mui
import { Box, Card, Container, ListItemIcon, MenuItem, MenuList, Pagination, Stack, Typography, useTheme } from '@mui/material'

const Home = () => {
  const { palette } = useTheme();
  const dispatch = useDispatch();
  const { keyword, location } = useParams();

  const [page, setPage] = useState(1);
  const [cat, setCat] = React.useState('');


  return (
      <>
        <Box>
            <NavbarGlass />
            <Header />
            <Container>
              <Filterbar />
          
              
            </Container>
            <Footer />
        </Box>
      </>
  )
}

export default Home