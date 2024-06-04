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
  
  // Helper function to format description into sections
  const formatDescription = (desc: string) => {
    
    const sections = desc.split(/(?=\[)/).map(section => {
      const titleEndIndex = section.indexOf(']');
      return {
        title: section.substring(1, titleEndIndex),
        content: section.substring(titleEndIndex + 1)
      };
    });

    return (
      <div>
        {sections.map((section, index) => (
          <div key={index}>
            <Typography variant="h6" gutterBottom>
              {section.title}
            </Typography>
            <Typography paragraph>
              {section.content}
            </Typography>
          </div>
        ))}
      </div>
    );
  };


  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={2} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h4" gutterBottom>
          {title}
        </Typography>
        <Typography variant="subtitle1">{companyName}, {jobType} - {location}</Typography>
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
          {/* {description} */}
          {formatDescription(description)}
        </Typography>
      </Paper>
  </Container>
    
  );
};

export default JobInformation;


