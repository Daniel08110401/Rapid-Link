import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import Header from '../component/Header';
import Footer from '../component/Footer';
import NavbarGlass from '../component/NavbarGlass';
import Filterbar from '../component/Filterbar';

import { Box, Container } from '@mui/material';

type Params = {
  keyword?: string;
  location?: string;
};

const Home: React.FC = () => {
  // const dispatch = useDispatch();
  // const { keyword, location } = useParams<Params>();

  // const [page, setPage] = useState<number>(1);
  // const [cat, setCat] = useState<string>('');

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
  );
}

export default Home;
