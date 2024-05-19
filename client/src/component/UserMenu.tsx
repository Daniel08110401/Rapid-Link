// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import { useNavigate, Link as RouterLink } from 'react-router-dom';
// import { Avatar } from '@mui/material';
// import { useSetRecoilState, useResetRecoilState } from 'recoil';
// import { userLogInState } from '../recoil/atoms/userState';
// import { UserSignOut } from '../recoil/selectors/userSignOut'; // Import the userSignOut selector
// import {
//   UserMenuContainer,
//   UserMenuIconButton,
//   UserMenuTooltip,
//   UserMenuStyledMenu,
//   UserMenuStyledMenuItem,
//   UserMenuTypography,
// } from '../style/UserMenuStyles';

// const UserMenu = () => {
//     const signOut = UserSignOut();
//     const navigate = useNavigate();
//     const theme = useTheme();
//     const [anchorElUser, setAnchorElUser] = React.useState(null);

//     const handleOpenUserMenu = (event:any) => {
//         setAnchorElUser(event.currentTarget);
//     };

//     const handleCloseUserMenu = () => {
//         setAnchorElUser(null);
//     };

//     const logOutUser = async () => {
//         await signOut(); // Use the sign out hook
//         navigate('/');
//         window.location.reload();
//     };
//     return (
//         <UserMenuContainer>
//             <UserMenuTooltip title="Open settings">
//                 <UserMenuIconButton onClick={handleOpenUserMenu}>
//                     <Avatar alt="User Avatar" src="" />
//                 </UserMenuIconButton>
//             </UserMenuTooltip>
//             <UserMenuStyledMenu
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//             >
//                 <UserMenuStyledMenuItem onClick={handleCloseUserMenu}>
//                     <UserMenuTypography>
//                         <RouterLink
//                             to="/admin/dashboard"
//                             style={{ textDecoration: 'none', color: theme.palette.primary.main }}
//                         >
//                             Profile
//                         </RouterLink>
//                     </UserMenuTypography>
//                 </UserMenuStyledMenuItem>

//                 <UserMenuStyledMenuItem onClick={handleCloseUserMenu}>
//                     <UserMenuTypography>
//                         <RouterLink
//                             to="/login"
//                             style={{ textDecoration: 'none', color: theme.palette.primary.main }}
//                         >
//                             Sign In
//                         </RouterLink>
//                     </UserMenuTypography>
//                 </UserMenuStyledMenuItem>
            
//                 {/* Assuming user state is determined to decide if showing logout */}
//                 <UserMenuStyledMenuItem onClick={logOutUser}>
//                     <UserMenuTypography style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
//                         Sign Out
//                     </UserMenuTypography>
//                 </UserMenuStyledMenuItem>
//             </UserMenuStyledMenu>
//         </UserMenuContainer>
//     );
// };

// export default UserMenu;

import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate, Link } from 'react-router-dom';
import { Avatar, IconButton, Tooltip, Menu, MenuItem, Typography } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { userLogInState } from '../recoil/atoms/userState'; // this atom holds authentication status
import {
  UserMenuContainer,
  UserMenuIconButton,
  UserMenuTooltip,
  UserMenuStyledMenu,
  UserMenuStyledMenuItem,
  UserMenuTypography,
} from '../style/UserMenuStyles';

const UserMenu = () => {
    const user = useRecoilValue(userLogInState); // userLogInState includes an isAuthenticated flag
    const navigate = useNavigate();
    const theme = useTheme();
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const logOutUser = () => {
        // Handle logout logic
        navigate('/');
        window.location.reload();
    };

    const handleProfileClick = () => {
        if (user.isAuthenticated) {
            navigate('/profile');
        } else {
            navigate('/login');
        }
        handleCloseUserMenu();
    };

    return (
        <UserMenuContainer>
            <UserMenuTooltip title="Open settings">
                <UserMenuIconButton onClick={handleOpenUserMenu}>
                    <Avatar alt="User Avatar" src="" />
                </UserMenuIconButton>
            </UserMenuTooltip>
            <UserMenuStyledMenu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
            >
                <UserMenuStyledMenuItem onClick={handleProfileClick}>
                    <UserMenuTypography style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
                        Profile
                    </UserMenuTypography>
                </UserMenuStyledMenuItem>

                {user.isAuthenticated ? (
                    <UserMenuStyledMenuItem onClick={logOutUser}>
                        <UserMenuTypography style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
                            Log Out
                        </UserMenuTypography>
                    </UserMenuStyledMenuItem>
                ) : (
                    <UserMenuStyledMenuItem onClick={() => navigate('/login')}>
                        <UserMenuTypography style={{ textDecoration: 'none', color: theme.palette.primary.main }}>
                            Sign In
                        </UserMenuTypography>
                    </UserMenuStyledMenuItem>
                )}
            </UserMenuStyledMenu>
        </UserMenuContainer>
    );
};

export default UserMenu;
