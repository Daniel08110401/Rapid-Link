import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#003366'  // primary color : midnightblue 003366
        },
        secondary: {
            main: '#003366', 
            green: '#00B383',
            
        }
    }
});

// Convert MUI theme to a simple object for styled-components
// const themeName = {
//     colors: {
//       primaryMain: muiTheme.palette.primary.main,
//       secondaryMain: muiTheme.palette.secondary.main,
//       secondaryGreen: muiTheme.palette.secondary.green
//     }
// };
  

export default theme;

