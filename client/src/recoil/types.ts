// Defines the structure of a single job type entry
export interface JobType {
    _id: string;
    name: string;
    description?: string;  // Optional description property
};
  
// Defines the overall state structure for job types in Recoil
export interface JobTypeState {
    loading: boolean;      // Tracks whether the job types are being loaded
    jobTypes: JobType[];   // Array of job types
    error: string | null;  // Error state, if any occurred during fetching
};


// Defines the overall jobs
export interface JobState {
    loading: boolean;
    jobs: Job[];
    error: string | null;
}

// Defines the structure of a sing job entry
export interface Job {
    _id: string;
    available: boolean;
    company: string;
    title: string;
    jobType: string;
    description: string;
    location: string;
    deadline: string;
}

export interface JobResponse {
    job?: Job;
    loading: boolean;
    error?: any;  // Make error optional since it might not always be present
}