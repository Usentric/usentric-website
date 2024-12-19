import React from 'react';
import { Box, Typography } from '@mui/material';
import theme from '@/theme';

const HowWeWorkSection: React.FC = () => {
    return (
        <Box
            mt={2}
            sx={{
                backgroundColor: '#03070D',
                position: 'relative',
                width: '100%',
            }}
        >
            <Box
                mt={5}
                sx={{
                    height: {
                        md: '300px'
                    },
                    '&::before': {
                        overflow: 'hidden',
                        borderRadius: 4,
                        content: '""',
                        backgroundImage: "url('/d51a961a985d4d629b979006e949ed9a.png')",
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: {
                            xs: '400%',
                            sm: '175%',
                            md: '100%',
                        },
                        backgroundPosition: {
                            xs: '15% 50%',
                            sm: '28% 50%',
                            md: '50% 50%',
                        },
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        opacity: 0.2,
                        zIndex: 1,
                    },
                    [theme.breakpoints.up('xs')]: {
                        height: "700px",
                    },
                    [theme.breakpoints.up('sm')]: {
                        height: "800px",
                    },
                    [theme.breakpoints.up('md')]: {
                        margin: 10,
                        borderRadius: "24px",
                        height: "350px"
                    },
                    position: 'relative',
                    zIndex: 2, // Ensure the child content is above the pseudo-element
                }}
            >

                <Box
                    p={2}
                    pb={5}
                    sx={{
                        width: '100%',
                        color: 'text.primary',
                    }}
                >
                    <Typography
                        width={"100%"}
                        variant="h4"
                        gutterBottom
                        sx={{
                            mt: 2,
                            mb: 5,
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}
                    >
                        How we work
                    </Typography>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            [theme.breakpoints.up('md')]: {
                                textAlign: 'center',
                                alignItems: 'center',
                                flexDirection: 'row', // Change to row on medium screens and up
                                justifyContent: 'space-around', // Distribute the items evenly
                            },
                        }}
                    >
                        <Box
                            sx={{
                                marginBottom: '1.5rem',
                                [theme.breakpoints.up('xs')]: {
                                    alignItems: 'left',
                                },
                                [theme.breakpoints.up('sm')]: {
                                    alignItems: 'left',
                                    maxWidth: '50%',
                                    pl: 2,
                                },
                                [theme.breakpoints.up('md')]: {
                                    textAlign: 'center',
                                    maxWidth: '40%',
                                    p: 0,
                                    m: 0,
                                },
                                [theme.breakpoints.up('lg')]: {
                                    maxWidth: '25%',
                                },
                            }}
                            pt={5}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold', m: 1 }}>
                                Align early and often
                            </Typography>
                            <Typography variant="body1"
                                sx={{
                                    [theme.breakpoints.up('xs')]: {},
                                    [theme.breakpoints.up('sm')]: {
                                        fontSize: 20,
                                        fontWeight: 400,
                                    },
                                }}
                            >
                                It’s important to take steps throughout the duration of your project to align on the solutions, work, and updates. Collaboration ensures success.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                marginBottom: '1.5rem',
                                [theme.breakpoints.up('xs')]: {
                                    alignItems: 'right',
                                },
                                [theme.breakpoints.up('sm')]: {
                                    marginLeft: 'auto',
                                    marginRight: 2,
                                    maxWidth: '60%',
                                    pl: 2,
                                },
                                [theme.breakpoints.up('md')]: {
                                    textAlign: 'center',
                                    maxWidth: '40%',
                                    p: 0,
                                    m: 0,
                                },
                                [theme.breakpoints.up('lg')]: {
                                    maxWidth: '25%',
                                },
                            }}
                            pt={5}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold', m: 1 }}>
                                The user comes first
                            </Typography>
                            <Typography variant="body1" sx={{
                                [theme.breakpoints.up('xs')]: {},
                                [theme.breakpoints.up('sm')]: {
                                    fontSize: 20,
                                    fontWeight: 400,
                                },
                            }}
                            >
                                The user is of utmost importance. Business needs are a close second. Strike the right balance and watch your product take off.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                marginBottom: '1.5rem',
                                alignItems: 'left',
                                [theme.breakpoints.up('xs')]: {},
                                [theme.breakpoints.up('sm')]: {
                                    maxWidth: '50%',
                                    pl: 2,
                                },
                                [theme.breakpoints.up('md')]: {
                                    textAlign: 'center',
                                    maxWidth: '40%',
                                    p: 0,
                                    m: 0,
                                },
                                [theme.breakpoints.up('lg')]: {
                                    maxWidth: '25%',
                                },
                            }}
                            pt={5}
                        >
                            <Typography variant="h6" sx={{ fontWeight: 'bold', m: 1 }}>
                                Good design matters
                            </Typography>
                            <Typography variant="body1" sx={{
                                [theme.breakpoints.up('xs')]: {},
                                [theme.breakpoints.up('sm')]: {
                                    fontSize: 20,
                                    fontWeight: 400,
                                },
                            }}
                            >
                                Beautiful visual design ensures users understand what you want to communicate. Balance your brand, your message and your site will come to life.
                            </Typography>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box >
    );
};

export default HowWeWorkSection;