import React from 'react';
import { useAuthCheck } from '../../recoil/stateHooks/UserAuthCheck';

const UserProfile: React.FC = () => {
  const authenticated = useAuthCheck();

  if (!authenticated) {
    return null;
  }

  return (
    <div>
      <h1>Profile Page</h1>
    </div>
  );
};

export default UserProfile;
