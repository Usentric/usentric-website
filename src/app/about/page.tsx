import { Box, Typography } from '@mui/material';

export default function About() {
  return (
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="body1">
          We are a small tech firm driven by helping business owners and entrepreneurs launch and deliver value to their customers.
        </Typography>
      </Box>
  );
}