import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { Box, Container } from '@mui/material';

import Header from '../component/Header';
import Footer from '../component/Footer';
import NavbarGlass from '../component/NavbarGlass';
import Filterbar from '../component/Filterbar';
import CardElement from '../component/CardElement';

// Sample job data for a Software Engineer position
import {
  exampleJob1,
  exampleJob2,
  exampleJob3,
} from '../dummyData/sampleJobs'


type Params = {
  keyword?: string;
  location?: string;
};

const Home: React.FC = () => {

  //===========//
  // After completing job add api, complete this part for fetching the data //
  //===========//
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
            <CardElement
              jobTitle={exampleJob1.jobTitle}
              description={exampleJob1.description}
              category={exampleJob1.category}
              location={exampleJob1.location}
              id={exampleJob1.id}
            />
            <CardElement
              jobTitle={exampleJob2.jobTitle}
              description={exampleJob2.description}
              category={exampleJob2.category}
              location={exampleJob2.location}
              id={exampleJob2.id}
            />
            <CardElement
              jobTitle={exampleJob3.jobTitle}
              description={exampleJob3.description}
              category={exampleJob3.category}
              location={exampleJob3.location}
              id={exampleJob3.id}
            />
          </Container>
          <Footer />
      </Box>
    </>
  );
}

export default Home;
