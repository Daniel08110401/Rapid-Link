import { selector } from 'recoil';
import axios from 'axios';
import { jobListState } from '../atoms/jobListState';
import { Job, JobType} from '../types';

export const fetchCombinedJobs = selector({
    key: 'fetchCombinedJobs',

    get: async({get}) => {
        const jobState = get(jobListState);
        // const typeState = get(jobTypeState);

        try {

            const jobResponse = await axios.get<{ jobs: Job[] }>('http://localhost:9000/api/jobs');
            const jobTypeResponse = await axios.get<{ jobType: JobType[] }>('http://localhost:9000/api/type/jobs');

            // console.log("Fetched jobs:", jobResponse.data.jobs);
            // console.log("Fetched job types:", jobTypeResponse.data.jobType);

            // Creating a map of job type IDs to names
            const jobTypeMap = new Map<string, string>();
            jobTypeResponse.data.jobType.forEach(jobType => {
                jobTypeMap.set(jobType._id, jobType.jobTypeName);
            });

            console.log("Job type map:", Array.from(jobTypeMap.entries()));

            // Combining job data with job type names
            const combinedJobs = jobResponse.data.jobs.map(job => {
                const jobTypeName = jobTypeMap.get(job.jobType);
                console.log(`Combining job ID ${job._id} with type ${job.jobType} found as ${jobTypeName}`);
                return {
                ...job,
                jobType: jobTypeName || 'Unknown'
                };
            });

            console.log("Combined jobs:", combinedJobs);
            return { ...jobState, loading: false, jobs: combinedJobs, error: null };

        } catch (error: any) {
            console.error("Failed to fetch jobs or job types:", error);
            return { ...jobState, loading: false, error: error.message };
        }

    },
});



  
  