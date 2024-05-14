import { selector } from "recoil";
import { userLogOutState } from "../atoms/userState";

// Selector to check if the logout process is loading
export const logOutLoadingSelector = selector({
    key: 'logOutLoadingSelector',
    get: ({ get }) => {
        const logout = get(userLogOutState);
        return logout.loading;
    }
});
  
  // Selector to get the logout error
export const logOutErrorSelector = selector({
    key: 'logOutErrorSelector',
    get: ({ get }) => {
        const logout = get(userLogOutState);
        return logout.error;
    }
});