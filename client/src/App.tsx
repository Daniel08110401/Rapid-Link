// import {BrowserRouter, Routes, Route} from 'react-router-dom';
// import Home from './pages/Home';
// import './App.css';
// import NotFound from './pages/NotFound';
// import { CssBaseline, ThemeProvider } from '@mui/material';
// import theme from './theme';
// import { RecoilRoot, atom } from 'recoil';


// const App = () =>{
//   return(
//       <>
//       <RecoilRoot>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//             <BrowserRouter>
//               <Routes>
//                 <Route path='/' element={<Home/>} />
//                 <Route path='*' element={<NotFound/>} />
//               </Routes>
//             </BrowserRouter>    
//         </ThemeProvider>
//       </RecoilRoot>
//       </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import NotFound from './pages/NotFound';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './theme';

const App: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
