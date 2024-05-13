import { useSetRecoilState, selector} from 'recoil';
import { userLogInState } from '../atoms/userState';
import axios from 'axios'

// Updating userState //
// ================== //
export const UserSignIn = () => {
    // Initializes the setUserState function with the ability to update userLogInState atom. 
    // This function will be used to modify the state based on the results of the sign-in process.
    const setUserState = useSetRecoilState(userLogInState);

    const signIn = async (credentials:any) => {
        setUserState(state => ({ ...state, loading: true }));

        try {
          const response = await axios.post("http://localhost:9000/api/signin", credentials);
          setUserState({
            loading: false,
            userInfo: response.data,
            isAuthenticated: true,
            error: null
          });
        } catch (error:any) {
          setUserState({
            loading: false,
            userInfo: null,
            isAuthenticated: false,
            error: error.response.data.error
          });
        }
    };
    
    return signIn
};

