import { Box, styled } from '@mui/material';

// Define the styled component outside of the Header functional component
export const StyleHeader = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: 'center',
    minHeight: 200,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: theme.palette.secondary.main
}));