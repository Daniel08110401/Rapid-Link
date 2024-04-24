import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';

export const StyledCard = styled(Card)({
  minWidth: 275,
  marginBottom: 3,
  marginTop: 3,
});

export const StyledCardContent = styled(CardContent)({});

export const StyledCardActions = styled(CardActions)({});

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 500,
  '& .MuiIconButton-root': {
    color: theme.palette.secondary.main,
    fontSize: 18,
  }
}));

export const StyledButton = styled(Button)({});  // Ensure Button is styled here

export const LocationIcon = styled(IconButton)({});

