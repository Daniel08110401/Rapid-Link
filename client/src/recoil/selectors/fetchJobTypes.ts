// import { selector } from 'recoil';
// import axios from 'axios';
// import { jobTypeState } from '../atoms/jobTypeState';
// import { JobTypeState, JobType } from '../types';

// // Selector to fetch job types
// export const fetchJobTypes = selector<JobTypeState>({
//   key: 'fetchJobTypes',
  
//   get: async ({get}) => {

//     // Get the current state of job types
//     const currentState = get(jobTypeState);

//     try {
//         // Fetch job types from the API
//         const response = await axios.get<{ jobType: JobType[] }>('http://localhost:9000/api/type/jobs');
//         console.log(response.data.jobType[0])

//         // Update state with fetched data
//         return { ...currentState, loading: false, jobType: response.data.jobType, error: null }; 
//     } catch (error: any) {
//         // Handle errors
//         return { ...currentState, loading: false, error: error.response?.data.error || 'Failed to fetch job types' };
//     }
//   },
// });

import { selector } from 'recoil';
import axios from 'axios';
import { jobTypeState } from '../atoms/jobTypeState';
import { JobTypeState, JobType } from '../types';

// Selector to fetch job types
export const fetchJobTypes = selector<JobTypeState>({
  key: 'fetchJobTypes',
  
  get: async ({get}) => {
    const currentState = get(jobTypeState);

    try {
        const response = await axios.get<{ jobType: JobType[] }>('http://localhost:9000/api/type/jobs');
        console.log(response.data.jobType);

        // Update state with fetched data, making sure it matches the structure of JobTypeState
        return { 
            ...currentState, 
            loading: false, 
            jobTypes: response.data.jobType, // Ensure this matches your state structure
            error: null 
        }; 
    } catch (error: any) {
        console.error("Error fetching job types:", error);
        return { 
            ...currentState, 
            loading: false, 
            error: error.response?.data.error || 'Failed to fetch job types' 
        };
    }
  },
});
