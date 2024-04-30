// Atom for job type state
import { atom } from 'recoil';
import { JobTypeState } from '../types';

export const jobTypeState = atom<JobTypeState>({
  key: 'jobTypeState', // Unique identifier for this atom
  
  default: {
    loading: false,
    jobTypes: [],
    error: null
  }
});
