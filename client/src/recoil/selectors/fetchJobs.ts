import { selector } from 'recoil';
// import axios from 'axios';
// import { jobListState } from '../atoms/jobListState';

// interface JobListState {
//   loading: boolean;
//   jobs: Job[];
//   error: string | null;
// }

// export const fetchJobs = selector({
//   key: 'fetchJobs',
  
//   get: async ({ get, set }) => {
//     set<JobListState>(jobListState, (prevState: JobListState) => ({ ...prevState, loading: true }));
//     try {
//       const response = await axios.get('/api/jobs');
//       return { ...get(jobListState), loading: false, jobs: response.data.jobs, error: null };
//     } catch (error) {
//       return { ...get(jobListState), loading: false, error: error.message };
//     }
//   },
// });
