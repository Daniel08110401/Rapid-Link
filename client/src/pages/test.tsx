// components/JobTypeComponent.tsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { fetchJobTypes } from '../recoil/selectors/fetchJobTypes';
import { fetchJobs } from '../recoil/selectors/fetchJobs';

const JobTypeComponent: React.FC = () => {
  const jobTypeData = useRecoilValue(fetchJobTypes);
  const jobData = useRecoilValue(fetchJobs)

  if (jobTypeData.loading) {
    return <div>Loading...</div>;
  }

  if (jobTypeData.error) {
    return <div>Error: {jobTypeData.error}</div>;
    return <div>Error: {jobData.error}</div>;
  }

  return (
    <div>
      <ul>
        {jobTypeData.jobTypes.map(jobType => (
          <li key={jobType.id}>{jobType.name}</li>
        ))}
      </ul>
      
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

export default JobTypeComponent;

