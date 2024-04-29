// components/JobTypeComponent.tsx
import React from 'react';
import { useRecoilValue } from 'recoil';
import { fetchJobTypes } from '../recoil/selectors/fetchJobTypes';

const JobTypeComponent: React.FC = () => {
  const jobTypeData = useRecoilValue(fetchJobTypes);

  if (jobTypeData.loading) {
    return <div>Loading...</div>;
  }

  if (jobTypeData.error) {
    return <div>Error: {jobTypeData.error}</div>;
  }

  return (
    <ul>
      {jobTypeData.jobTypes.map(jobType => (
        <li key={jobType.id}>{jobType.name}</li>
      ))}
    </ul>
  );
};

export default JobTypeComponent;

