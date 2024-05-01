import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { Box, Container } from '@mui/material';

// Recoil
import { useRecoilValue } from 'recoil';
// import { fetchJobTypes } from '../recoil/selectors/fetchJobTypes';
import { fetchJobs } from '../recoil/selectors/fetchJobs';

// Components
import Header from '../component/Header';
import Footer from '../component/Footer';
import NavbarGlass from '../component/NavbarGlass';
import Filterbar from '../component/Filterbar';
import CardElement from '../component/CardElement';

// dummy job data //
// import { exampleJob } from '../dummyData/sampleJobs'

const Home: React.FC = () => {
  // Filtering jobs //
  //================//
  const [category, setCategory] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  //===================//
  // Fetching job data //
  //===================//
  const jobData = useRecoilValue(fetchJobs)
  // Error handling
  if (jobData.error) {
    return <div>Error: {jobData.error}</div>;
  };

  const filteredJobs = jobData.jobs.filter((job) => (
    (category === '' || job.jobType === category) &&
    (location === '' || job.location === location) &&
    (searchTerm === '' || job.title.toLowerCase().includes(searchTerm.toLowerCase()))
  )).slice(0, 7);

  return (
    <>
      <Box>
          <NavbarGlass />
          <Header />
          <Container>
            <Filterbar 
              onCategoryChange={setCategory}
              onLocationChange={setLocation}
              onSearch={setSearchTerm}
            />
            {filteredJobs.map((job, i) => (
            <CardElement
              key={job.id}
              company={job.company}
              jobTitle={job.title}
              description={job.description}
              category={job.jobType}
              location={job.location}
              id={String(i+=1)}
            />
            ))}
          </Container>
          <Footer />
      </Box>
    </>
  );
}

export default Home;
