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
            navigate('/user/profile');
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
