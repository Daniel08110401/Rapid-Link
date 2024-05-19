import React from 'react';
import { Box, Typography, Button, Link, Container, Paper, List, ListItem } from '@mui/material';


interface JobDetails {
  companyName: string;
  description: string;
  location: string;
  companyUrl: string;
  postedTime: string;
  applicants: string;
  employmentType: string;
  companySize: string;
  department: string;
  skills: string[];
  jobPoints: string[];
}

const sampleJobDetails: JobDetails = {
  companyName: 'Marlee (Fingerprint For Success)',
  description: 'We are inviting professionals in high-growth industries who are thinking about their next move or looking for a new opportunity to join our expanding talent pool.',
  location: 'Tokyo, Tokyo, Japan',
  companyUrl: 'http://www.marlee.com',
  postedTime: '3 weeks ago',
  applicants: 'Over 100 applicants',
  employmentType: 'Remote - Full-time - Entry level',
  companySize: '11-50 employees',
  department: 'Software Development',
  skills: ['Programming', 'Machine Learning', '+7 more'],
  jobPoints: [
    'Help job seekers get discovered by our partners based on their anticipated hiring needs',
    'Provide optional support and resources for job seekers in their career endeavors',
    'Help individuals understand, and bring out the best in themselves and each other'
  ]
};

const JobDescription: React.FC = () => {
  const {
    companyName,
    description,
    location,
    companyUrl,
    postedTime,
    applicants,
    employmentType,
    companySize,
    department,
    skills,
    jobPoints
  } = sampleJobDetails;

  return (
    <Container component="main" maxWidth="md">
      <Paper elevation={2} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h4" gutterBottom>
          Expression of Interest - Software Engineer Intern
        </Typography>
        <Link href={companyUrl} underline="hover" color="inherit" target="_blank">
          <Typography variant="subtitle1">{companyName} - {location}</Typography>
        </Link>
        <Typography variant="subtitle2" color="textSecondary" gutterBottom>
          {postedTime} · {applicants}
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 2 }}>
          {employmentType} · {companySize} employees · {department}
        </Typography>
        <Box sx={{ mt: 2, mb: 1 }}>
          <Button variant="contained" color="primary" sx={{ mr: 1 }}>
            Easy Apply
          </Button>
          <Button variant="outlined" color="primary">
            Save
          </Button>
        </Box>
      </Paper>

      <Paper elevation={2} sx={{ padding: 3, marginTop: 3 }}>
        <Typography variant="h6" gutterBottom>
          About the job
        </Typography>
        <Typography paragraph>
          {description}
        </Typography>
        <List>
          {jobPoints.map((point, index) => (
            <ListItem key={index}>{point}</ListItem>
          ))}
        </List>
        <Typography variant="body2" gutterBottom>
          Skills: {skills.join(', ')}
        </Typography>
      </Paper>
    </Container>
  );
};

export default JobDescription;
