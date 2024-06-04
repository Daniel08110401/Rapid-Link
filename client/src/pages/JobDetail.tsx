import { useParams, Navigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Box, Container, Typography } from '@mui/material';
import { fetchJobById } from '../recoil/selectors/fetchJobById';
import { JobResponse } from '../recoil/types';


// Components
import Header from '../component/Header';
import Footer from '../component/Footer';
import NavbarGlass from '../component/NavbarGlass';
import JobInformation from '../component/JobInformation';

const JobDetailPage = () => {
    const { jobId } = useParams<{ jobId?: string }>();  // Ensuring TypeScript knows that jobId can be undefined
    // console.log(jobId)

    const jobData= useRecoilValue(fetchJobById(jobId ?? '')) as JobResponse
    console.log(jobData)

    // Handle loading and error states
    if (jobData.loading) {
        return <div>Loading...</div>;
    }
    if (jobData.error) {
        return <div>Error: {jobData.error}</div>;
    }

    // Check for job data presence
    if (!jobData.job) {
        return <Navigate to="/404" />;
    }

    // Now TypeScript knows jobData must be a Job object
    const { title, company, description, location, deadline, jobType, url} = jobData.job; // Assuming jobData is now structured as { job: Job }


    return (
        <Box>
            <NavbarGlass />
            <Header />        
                <JobInformation 
                    companyName={company}
                    title={title}
                    description={description}
                    jobType={jobType}
                    location={location}
                    companyUrl={url} 
                    deadline={deadline}               
                />
            <Footer />
        </Box>
    );
};
  
export default JobDetailPage;

