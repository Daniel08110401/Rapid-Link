import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Test from './pages/test';
import JobDetailPage from './pages/JobDetailPage';


const App: React.FC = () => {  
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/test' element={<Test />} />
            <Route path="/job/:jobId" element={<JobDetailPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
