import theme from "@/theme"
import { Box, Typography } from "@mui/material"



const AboutUs = () => {
    return (
        <>
            <Box sx={{
                mt: 4,
                mb: 2,
            }}
            >
                <Typography
                    sx={{
                        color: '#FFFFFF99',
                        [theme.breakpoints.up("xs")]: {
                            fontSize: 16,
                            fontWeight: 400,
                        },
                        [theme.breakpoints.up("sm")]: {
                            fontSize: 20,
                            fontWeight: 400,
                        }
                    }}
                >
                    About us
                </Typography>
            </Box>
            <Box>
                <Typography
                    sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        [theme.breakpoints.up("xs")]: {
                            fontSize: 24,
                            fontWeight: 300,
                        },
                        [theme.breakpoints.up("sm")]: {
                            fontSize: 46,
                            fontWeight: 300,
                        }
                    }}
                >
                    We are a small tech firm driven by helping{' '}
                    <Box component="span" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                        business owners
                    </Box>
                    {' '}and{' '}
                    <Box component="span" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                        entrepreneurs
                    </Box>
                    {' '}launch and deliver value to their customers.
                </Typography>
            </Box >
        </>
    )
}

export default AboutUs