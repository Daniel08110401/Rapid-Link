// Defines the structure of a single job type entry
export interface JobType {
    _id: string;
    jobTypeName: string;
    description?: string;  // Optional description property
};
  
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
    url: string;
}

// Defines the overall state structure for job types
export interface JobTypeState {
    loading: boolean;      // Tracks whether the job types are being loaded
    jobTypes: JobType[];   // Array of job types
    error: string | null;  // Error state, if any occurred during fetching
};


// Defines the overall state structure of jobs
export interface JobState {
    loading: boolean;
    jobs: Job[];
    error: string | null;
};

// Defines the state structure of a single job
export interface JobResponse {
    job?: Job;
    loading: boolean;
    error?: string | null;  // Make error optional since it might not always be present
};


// User State //
// =============== //

// export interface userState {
//     loading: boolean,
//     userInfo: null,
//     isAuthenticated: false,
//     error: null
// };

// export interface userProfileState {
//     loading: boolean,
//     user: null,
//     error: null
// };

// // Logout state
// export interface userLogoutState {
//     loading: boolean,
//     error: null
// };
  