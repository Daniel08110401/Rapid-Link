import { selector } from 'recoil';
import axios from 'axios';
import { jobListState } from '../atoms/jobListState';
import { Job } from '../types';


export const fetchJobs = selector({
  key: 'fetchJobs',

  get: async ({get}) => {
    const state = get(jobListState);
    try {
      const response = await axios.get<{ jobs: Job[] }>('http://localhost:9000/api/jobs');
      return { ...state, loading: false, jobs: response.data.jobs, error: null };
    } catch (error: any) {
      return { ...state, loading: false, error: error.message };
    }
  },
});

