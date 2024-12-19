import { Box, Typography } from '@mui/material';

export default function Contact() {
    return (
        <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom>
                Contact Us
            </Typography>
            <Typography variant="body1">
                Please reach out to us at contact@usentric.com.
            </Typography>
        </Box>
    );
}