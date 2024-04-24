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
