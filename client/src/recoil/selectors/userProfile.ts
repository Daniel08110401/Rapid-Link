import { selector } from 'recoil';
import { userProfileState } from '../atoms/userState';

// Selector to check if the user profile is currently loading
export const userProfileLoadingSelector = selector({
  key: 'userProfileLoadingSelector',
  get: ({ get }) => {
    const profile = get(userProfileState);
    return profile.loading;
  }
});

// Selector to get the user profile error
export const userProfileErrorSelector = selector({
  key: 'userProfileErrorSelector',
  get: ({ get }) => {
    const profile = get(userProfileState);
    return profile.error;
  }
});

// Selector to access the user profile data
export const userProfileSelector = selector({
  key: 'userProfileSelector',
  get: ({ get }) => {
    const profile = get(userProfileState);
    return profile.user;
  }
});
