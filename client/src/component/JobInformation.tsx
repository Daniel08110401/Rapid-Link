// Import necessary components and types from Material-UI
import React from 'react';
import { Box, Typography, Button, Link, Container, Paper, List, ListItem } from '@mui/material';

// Define TypeScript interfaces for the job details
interface JobDetailsPage {
  companyName: string;
  title: string;
  description: string;
  jobType: string;
  location: string;
  companyUrl: string;
  deadline: string;
};

// JobPost Component
const JobInformation: React.FC<JobDetailsPage> = ({ 
  companyName, 
  description,
  title,
  jobType, 
  location, 
  companyUrl, 
  deadline,

  }) => {
  
  return (
    <Container component="main" maxWidth="md">
    <Paper elevation={2} sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1">{companyName}, {jobType} - {location}</Typography>

      {/* <Typography variant="subtitle2" color="textSecondary" gutterBottom>
        {postedTime} · {applicants}
      </Typography> */}
      {/* <Typography variant="subtitle1" sx={{ mt: 2 }}>
        {employmentType} · {companySize} employees · {department}
      </Typography> */}
      <Box sx={{ mt: 2, mb: 1 }}>
        <Link href={companyUrl} underline="hover" color="inherit" target="_blank">
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>
            Apply
          </Button>
        </Link>
        <Button variant="outlined" color="primary">
          Save
        </Button>
      </Box>
    </Paper>

    <Paper elevation={2} sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom sx={{}}>
        About the job
      </Typography>
      <Typography paragraph>
        {description}
      </Typography>
      {/* <List>
        {jobPoints.map((point, index) => (
          <ListItem key={index}>{point}</ListItem>
        ))}
      </List> */}
      {/* <Typography variant="body2" gutterBottom>
        Skills: {skills.join(', ')}
      </Typography> */}
    </Paper>
  </Container>
    
  );
};

export default JobInformation;


