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
  company: string;
  jobTitle: string;
  description: string;
  category: string;
  location: string;
  id: string;
};

const CardElement: React.FC<CardElementProps> = ({ company, jobTitle, description, category, location, id }) => {
  const theme = useTheme();

  return (
    <StyledCard>
      <StyledCardContent>
        <StyledTypography sx={{ color: theme.palette.secondary.main }} gutterBottom>
          <StyledLocationIcon><LocationOnIcon /></StyledLocationIcon> {location}
        </StyledTypography>
        <Typography variant="h5" component="div">
          {company}, {jobTitle}
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
