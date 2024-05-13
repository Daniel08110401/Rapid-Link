import { atom } from 'recoil';

// User sign-in state
export const userLogInState = atom({
  key: 'userLogInState',
  default: {
    loading: false,
    userInfo: null,
    isAuthenticated: false,
    error: null
  }
});

// User profile state
export const userProfileState = atom({
  key: 'userProfileState',
  default: {
    loading: false,
    user: null,
    error: null
  }
});

// Logout state
export const userLogOutState = atom({
  key: 'userLogOutState',
  default: {
    loading: false,
    error: null
  }
});


