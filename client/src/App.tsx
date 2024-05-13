import React, { Suspense, useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Test from './pages/test';
import JobDetailPage from './pages/JobDetail';
import LogIn from './pages/Login';



const App: React.FC = () => {  
  // Google Oauth
  useEffect(() => {
    const loadGooglePlatform = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        if (window.google) {
          window.google.accounts.id.initialize({
            client_id: '675624607851-8i09s2qi435us03lqbb3qj86dkk0qc8q.apps.googleusercontent.com', 
            callback: handleCredentialResponse
          });
        }
      };
      document.body.appendChild(script);
    };

    if (!window.google) {
      loadGooglePlatform();
    } else {
      // Directly initialize if google object is already present
      window.google.accounts.id.initialize({
        client_id: '675624607851-8i09s2qi435us03lqbb3qj86dkk0qc8q.apps.googleusercontent.com',
        callback: handleCredentialResponse
      });
    }

    function handleCredentialResponse(response: any) {
      console.log('Encoded JWT ID token: ' + response.credential);
    }
  }, []);
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Suspense fallback={<div>LOADING</div>}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/search/:keyword' element={<Home />} />
              <Route path="/job/:jobId" element={<JobDetailPage />} />
              <Route path='/login' element={<LogIn />} />
              <Route path='/test' element={<Test />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
