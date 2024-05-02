import { selectorFamily } from 'recoil';
import axios from 'axios';
import { JobResponse } from '../types'; // Ensure your Job interface is properly imported

export const fetchJobById = selectorFamily({
  key: 'fetchJobById',

  get: (jobId: string) => async ({get}) => {
    // Handling an empty jobId by returning null or a specific error object
    if (jobId === '') {
        console.error("Invalid job ID provided:", jobId);  // Alternatively, return a specific error state or object
    }

    try {
      const response = await axios.get<JobResponse>(`http://localhost:9000/api/job/${jobId}`);
    //   console.log(response.data)
    //   console.log(response.data.job)
      return response.data; // return the job data of this specific id
    } catch (error : any) {
      //throw error; // Here you could also return an error state if preferred
      return { loading: false, error: error.message };
    }
  },
});
