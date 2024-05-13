import { selector, useRecoilValue } from 'recoil';
import { userLogInState } from '../atoms/userState';

export const isAuthenticatedSelector = selector({
    key: 'isAuthenticatedSelector',
    get: ({ get }) => {
      const user = get(userLogInState);
      return user.isAuthenticated;
    }
});


