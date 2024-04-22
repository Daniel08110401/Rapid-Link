import { Box, styled } from '@mui/material';

// Define a styled component for the main footer container
export const FooterContainer = styled(Box)(({ theme }) => ({
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main
}));

// Define a styled component for the text inside the footer
export const FooterText = styled(Box)(({ theme }) => ({
    color: theme.palette.primary.contrastText
}));
