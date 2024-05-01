// components/JobTypeComponent.tsx
import React from 'react';

// for recoil 
import { useRecoilValue } from 'recoil';
import { fetchJobTypes } from '../recoil/selectors/fetchJobTypes';
import { fetchJobs } from '../recoil/selectors/fetchJobs';

const JobComponent: React.FC = () => {
  // const jobTypeData = useRecoilValue(fetchJobTypes);
  const jobData = useRecoilValue(fetchJobs)

  if (jobData.loading) {
    return <div>Loading...</div>;
  }

  if (jobData.error) {
    return <div>Error: {jobData.error}</div>;
  }

  return (
    <div>
      
      <div>
        <h1>Job Listings</h1>
        <ul>
          {jobData.jobs.map(job => (
            <li key={job.id}>
              {job.title} - {job.location}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
  
};

export default JobComponent;

