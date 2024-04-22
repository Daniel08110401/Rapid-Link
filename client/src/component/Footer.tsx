// import React from 'react';
// import { Box, useTheme } from '@mui/material';

// const Footer: React.FC = () => {
//   const theme = useTheme();
//   return (
//     <>
//       <Box sx={{
//           height: '70px',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           backgroundColor: theme.palette.primary.main
//       }}>
//           <Box component="span" sx={{ color: theme.palette.primary.contrastText }}>All rights reserved</Box>
//       </Box>
//     </>
//   );
// }

// export default Footer;

import React from 'react';
import { useTheme } from '@mui/material';
import { 
  FooterContainer, 
  FooterText 
} from '../style/FooterStyles'; // Adjust the import path as necessary

const Footer: React.FC = () => {
    const theme = useTheme();

    return (
        <FooterContainer theme={theme}>
            <FooterText component="span" theme={theme}>
                All rights reserved
            </FooterText>
        </FooterContainer>
    );
}

export default Footer;
