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

// import { Box } from '@mui/material'
// import React from 'react'
// import { useTheme } from '@mui/material/styles';

// const Footer = () => {
//     const { palette } = useTheme();
//     return (
//         <>
//             <Box sx={{
//                 height: '70px',
//                 bgcolor: palette.primary.main,
//                 display: 'flex',
//                 justifyContent: 'center',
//                 alignItems: 'center'
//             }}>
//                 <Box component='span' sx={{ color: palette.primary.main }}>All rights reserved! 2023.</Box>

//             </Box>
//         </>
//     )
// }

// export default Footer
