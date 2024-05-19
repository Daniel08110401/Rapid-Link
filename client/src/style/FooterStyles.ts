import { Box, styled } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
    height: '10vh',
    paddingTop: '10px',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
}));

export const FooterText = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText
}));
