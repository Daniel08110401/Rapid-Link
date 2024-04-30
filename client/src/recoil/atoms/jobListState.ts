// Atom for job listings
import { atom } from 'recoil';
import { JobState } from '../types';

export const jobListState = atom<JobState>({
    key: 'jobListState',
    default: {
        loading: false,
        jobs: [],
        error: null,
    },
});
  