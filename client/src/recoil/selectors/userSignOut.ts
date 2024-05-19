import { selector } from 'recoil';
import { useSetRecoilState } from 'recoil';
import { userLogInState, userLogOutState } from '../atoms/userState';
import axios from 'axios';

export const UserSignOut = () => {
    const setUserState = useSetRecoilState(userLogInState);
    const setLogoutState = useSetRecoilState(userLogOutState);

    const signOut = async () => {
        setLogoutState({ loading: true, error: null });

        try {
            await axios.get("http://localhost:9000/api/logout");
            setUserState({ loading: false, userInfo: null, isAuthenticated: false, error: null }); // Clear the user state
            setLogoutState({ loading: false, error: null });
        } catch (error: any) {
            setLogoutState({ loading: false, error: error.response?.data?.error || "Logout failed" });
        }
    };

    return signOut;
};


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

