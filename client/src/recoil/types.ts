// Defines the structure of a single job type entry
export interface JobType {
    id: string;
    name: string;
    description?: string;  // Optional description property
};
  
// Defines the overall state structure for job types in Recoil
export interface JobTypeState {
    loading: boolean;      // Tracks whether the job types are being loaded
    jobTypes: JobType[];   // Array of job types
    error: string | null;  // Error state, if any occurred during fetching
};
  