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
  exampleJob
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
              jobTitle={exampleJob.data[0].jobTitle}
              description={exampleJob.data[0].description}
              category={exampleJob.data[0].category}
              location={exampleJob.data[0].location}
              id={exampleJob.data[0].id}
            />
            <CardElement
              jobTitle={exampleJob.data[1].jobTitle}
              description={exampleJob.data[1].description}
              category={exampleJob.data[1].category}
              location={exampleJob.data[1].location}
              id={exampleJob.data[1].id}
            />
            <CardElement
              jobTitle={exampleJob.data[2].jobTitle}
              description={exampleJob.data[2].description}
              category={exampleJob.data[2].category}
              location={exampleJob.data[2].location}
              id={exampleJob.data[2].id}
            />
          </Container>
          <Footer />
      </Box>
    </>
  );
}

export default Home;
