// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import { Link } from 'react-router-dom';
// import AddIcon from '@mui/icons-material/Add';
// import { useTheme } from '@mui/material';

// // Define the props interface
// interface CardElementProps {
//   jobTitle: string;
//   description: string;
//   category: string;
//   location: string;
//   id: string;
// }

// const CardElement: React.FC<CardElementProps> = ({ jobTitle, description, category, location, id }) => {
//   const { palette } = useTheme();
//   return (
//     <Card sx={{ minWidth: 275, mb: 3, mt: 3 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 15, color: palette.secondary.main, fontWeight: 500 }} gutterBottom>
//           <IconButton><LocationOnIcon sx={{ color: palette.secondary.main, fontSize: 18 }} /></IconButton> {location}
//         </Typography>
//         <Typography variant="h5" component="div">
//           {jobTitle}
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           {category}
//         </Typography>
//         <Typography variant="body2">
//           Description: {description.split(" ").slice(0, 15).join(" ") + "..."}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button disableElevation variant="contained" size="small" startIcon={<AddIcon />}>
//           <Link to={`/job/${id}`} style={{ textDecoration: 'none', color: 'white', display: 'block' }}>More Details</Link>
//         </Button>
//       </CardActions>
//     </Card>
//   );
// }

import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// If using styled components separately and not importing Button directly
import {
  StyledCard,
  StyledCardContent,
  StyledCardActions,
  StyledTypography,
  StyledButton,
  LocationIcon as StyledLocationIcon
} from '../style/CardElementStyle';

interface CardElementProps {
  jobTitle: string;
  description: string;
  category: string;
  location: string;
  id: string;
}

const CardElement: React.FC<CardElementProps> = ({ jobTitle, description, category, location, id }) => {
  const theme = useTheme();

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTypography sx={{ color: theme.palette.secondary.main }} gutterBottom>
          <StyledLocationIcon><LocationOnIcon /></StyledLocationIcon> {location}
        </StyledTypography>
        <Typography variant="h5" component="div">
          {jobTitle}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {category}
        </Typography>
        <Typography variant="body2">
          Description: {description.split(" ").slice(0, 15).join(" ") + "..."}
        </Typography>
      </StyledCardContent>
      <StyledCardActions>
        <StyledButton disableElevation variant='contained' size="small" startIcon={<AddIcon />}>
          <Link to={`/job/${id}`} style={{ textDecoration: "none", color: "white" }}>More Details</Link>
        </StyledButton>
      </StyledCardActions>
    </StyledCard>
  );
}

export default CardElement;
