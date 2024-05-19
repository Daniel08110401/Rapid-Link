import { styled } from '@mui/material/styles';
import { Box, TextField, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from './NavbarGlassStyles';

export const FormContainer = styled(Box)({
  height: '81vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const FormBox = styled(Box)({
  width: '400px', // Set a fixed width for the form box
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px', // Add padding for some spacing
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle box shadow
  borderRadius: '8px', // Optional: Add border radius for rounded corners
  backgroundColor: '#fff', // Optional: Add background color
});

export const StyledForm = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
});

export const StyledTextField = styled(TextField)({
  marginBottom: '24px',
  width: '100%',
});

export const StyledButton = styled(Button)({
  width: '100%',
});

export const SignInDiv = styled('div')({
  width: '100%', // Set width to 70%
  height: '30px',
  marginTop: '16px', // Add margin-top for spacing
  display: 'flex',
  justifyContent: 'center', // Center horizontally
  alignItems: 'center', // Center vertically
});

export const StyledRouterLink = styled(RouterLink)({
  textDecoration: 'none',
  color: 'inherit',
  marginBottom: '30px',
});

export const StyledLogo = styled(Logo)({});

