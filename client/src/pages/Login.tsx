
// Original Log in page //
// ==================== //
import React, { useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { isAuthenticatedSelector } from '../recoil/selectors/fetchUserData'
import { UserSignIn } from '../recoil/selectors/userSignIn';
import { Link as RouterLink } from 'react-router-dom';
import { Logo } from '../style/NavbarGlassStyles';

interface FormValues {
  email: string;
  password: string;
}

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LogIn: React.FC = () => {
  const navigate = useNavigate();
  const isAuthenticated = useRecoilValue(isAuthenticatedSelector);
  const signIn = UserSignIn(); // Custom hook to handle sign-in logic

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }

    // Ensure the Google sign-in button is rendered when the component is mounted
    const signInDiv = document.getElementById('signInDiv');
    if (signInDiv && window.google) {
      window.google.accounts.id.renderButton(
        signInDiv,
        { theme: 'outline', size: 'large' }
      );
    }
  }, [isAuthenticated, navigate]);

  const formik = useFormik<FormValues>({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signIn(values); // Use the signIn function from the custom hook
    }
  });

  return (
    <>
      <Box sx={{ height: '81vh', display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box onSubmit={formik.handleSubmit as any} component="form" className='form_style border-style'>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
            <RouterLink to={`/`} style={{ textDecoration: "none", color: "inherit", marginBottom: "30px"}}>
              <Logo>Rapid Link</Logo>
            </RouterLink>
            <TextField sx={{ mb: 3 }}
              fullWidth
              id="email"
              label="E-mail"
              name='email'
              InputLabelProps={{ shrink: true }}
              placeholder="E-mail"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField sx={{ mb: 3 }}
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              InputLabelProps={{ shrink: true }}
              placeholder="Password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button fullWidth variant="contained" type='submit'>Log In</Button>
            <div id="signInDiv" style={{width:"200px", height:"30px"}}/> {/* Google Sign-In button will be rendered here */}

          </Box>
        </Box>
      </Box>
    </>
  );
}
export default LogIn;