import { selector } from 'recoil';
import axios from 'axios';
import { jobTypeState } from '../atoms/jobTypeState';
import { JobTypeState, JobType } from '../types';

// Selector to fetch job types
export const fetchJobTypes = selector<JobTypeState>({
  key: 'fetchJobTypes',
  
  get: async ({get}) => {

    // Get the current state of job types
    const currentState = get(jobTypeState);
    console.log("Fetching job types...");


    try {
        // Fetch job types from the API
        const response = await axios.get<{ jobTypes: JobType[] }>('http://localhost:9000/api/type/jobs'); 

        console.log("Fetched job types successfully:", response.data.jobTypes);
        // Update state with fetched data
        return { ...currentState, loading: false, jobTypes: response.data.jobTypes, error: null }; 
    } catch (error: any) {
        // Handle errors
        return { ...currentState, loading: false, error: error.response?.data.error || 'Failed to fetch job types' };
    }
  },
});
