import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useRecoilState } from "recoil";
import { Box, Container, Pagination, Stack } from '@mui/material';

// Recoil //
import { useRecoilValue } from 'recoil';
// import { fetchJobTypes } from '../recoil/selectors/fetchJobTypes';
import { fetchJobs } from '../recoil/selectors/fetchJobs';

import { combinedJobSelector } from '../recoil/selectors/combinedJobSelector';

// Components
import Header from '../component/Header';
import Footer from '../component/Footer';
import NavbarGlass from '../component/NavbarGlass';
import Filterbar from '../component/Filterbar';
import CardElement from '../component/CardElement';

// dummy job data //
// import { exampleJob } from '../dummyData/sampleJobs'

const Home: React.FC = () => {
  // Filtering states
  const [category, setCategory] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [page, setPage] = useState(1);
  const jobsPerPage = 7;

  // Fetching job data 
  const jobData = useRecoilValue(fetchJobs)
  const combinedJobData = useRecoilValue(combinedJobSelector)
  // Error handling
  if (jobData.error) {
    return <div>Error: {jobData.error}</div>;
  };

  // if (!combinedJobData.length) {
  //   return <div>Loading jobs or no jobs available.</div>;
  // };

  const filteredJobs = jobData.jobs.filter((job) => (
    (category === '' || job.jobType === category) &&
    (location === '' || job.location === location) &&
    (searchTerm === '' || job.title.toLowerCase().includes(searchTerm.toLowerCase()))
  ));

  // const filteredJobs = combinedJobData.filter(job => (
  //   (category === '' || (job.jobType && job.jobType.name === category)) &&
  //   (location === '' || job.location === location) &&
  //   (searchTerm === '' || job.title.toLowerCase().includes(searchTerm.toLowerCase()))
  // ));


  const pageCount = Math.ceil(filteredJobs.length / jobsPerPage); // pages needed to display all filtered jobs 
  const indexOfLastJob = page * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);




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
            {currentJobs.map((job) => (
              <CardElement
                key={job._id}
                company={job.company}
                jobTitle={job.title}
                description={job.description}
                category={job.jobType ? job.jobType : "No category"}
                location={job.location}
                id={job._id}
              />
            ))}
            <Stack spacing={2} direction="row" justifyContent="center">
              <Pagination
                count={pageCount}
                page={page}
                onChange={(event, value) => setPage(value)}
                color="primary"
              />
            </Stack>
          </Container>
          <Footer />
      </Box>
    </>
  );
}

export default Home;
