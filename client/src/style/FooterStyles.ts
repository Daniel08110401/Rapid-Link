import { Box, styled } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
}));

export const FooterText = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText
}));
