import { styled } from '@mui/material/styles';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

export const UserMenuContainer = styled(Box)({
  flexGrow: 0,
});

export const UserMenuIconButton = styled(IconButton)({
  padding: 0,
});

export const UserMenuTooltip = styled(Tooltip)({});

export const UserMenuAvatar = styled('div')({});

export const UserMenuStyledMenu = styled(Menu)(({ theme }) => ({
  marginTop: '45px',
}));

export const UserMenuStyledMenuItem = styled(MenuItem)({});

export const UserMenuTypography = styled(Typography)({
  textAlign: 'center',
});
