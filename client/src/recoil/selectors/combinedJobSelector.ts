import { selector } from 'recoil';
import { jobListState } from '../atoms/jobListState';
import { jobTypeState } from '../atoms/jobTypeState';
import { Job, JobType, JobTypeState} from '../types';

export const combinedJobSelector = selector({
  key: 'combinedJobSelector',
  get: ({ get }) => {
      const jobState = get(jobListState);
      const jobTypestate = get(jobTypeState);

      if (!jobState.jobs.length || !jobTypestate.jobTypes.length) {
          // Handle scenario where data might still be loading
          return [];
      }

      // Map over the jobs to attach job type details
      const combinedJobs = jobState.jobs.map(job => {
          const jobTypeDetail = jobTypestate.jobTypes.find(type => type._id === job.jobType);
          return {
              ...job,
              jobType: jobTypeDetail ? jobTypeDetail.name : null // Attach job type name or null if not found
          };
      });

      return combinedJobs;
  }
});

  
  