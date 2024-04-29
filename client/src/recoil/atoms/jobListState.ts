import { atom } from 'recoil';

export const jobListState = atom({
  key: 'jobListState',
  default: { loading: false, jobs: [], error: null },
});

