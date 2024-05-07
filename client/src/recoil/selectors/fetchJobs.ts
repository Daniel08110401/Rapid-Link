import { selector } from 'recoil';
import axios from 'axios';
import { jobListState } from '../atoms/jobListState';
import { Job} from '../types';


export const fetchJobs = selector({
  key: 'fetchJobs',

  get: async ({get}) => {
    const jobState = get(jobListState);

    try {
      const response = await axios.get<{ jobs: Job[] }>('http://localhost:9000/api/jobs');
      // console.log(response.data.jobs)
      return { ...jobState, loading: false, jobs: response.data.jobs, error: null };
    } catch (error: any) {
      return { ...jobState, loading: false, error: error.message };
    }
  },
});



