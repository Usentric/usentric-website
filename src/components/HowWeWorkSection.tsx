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
                borderRadius: 2,
                overflow: 'hidden',
            }}
        >
            <Box
                mt={5}
                component="img"
                src="/d51a961a985d4d629b979006e949ed9a.png"
                alt="Hero image showing hands"
                sx={{
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: .15,
                    [theme.breakpoints.up('xs')]: {
                        maxHeight: "700px",
                    },
                    [theme.breakpoints.up('sm')]: {
                        maxHeight: "900px",

                    },
                }}
            />
            <Box
                p={2}
                pb={5}
                sx={{
                    width: '100%',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    color: 'text.primary'
                }}
            >
                <Typography variant="h4" gutterBottom sx={{ mt: 2, fontWeight: 'bold', textAlign: 'center' }}>
                    How we work
                </Typography>
                <Box>
                    <Box sx={{
                        marginBottom: '1.5rem',
                        alignItems: "left",
                        [theme.breakpoints.up('xs')]: {
                        },
                        [theme.breakpoints.up('sm')]: {
                            maxWidth: "50%",
                            pl: 2,
                        },

                    }}
                        pt={5}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Align early and often
                        </Typography>
                        <Typography variant="body1"
                            sx={{
                                [theme.breakpoints.up('xs')]: {
                                },
                                [theme.breakpoints.up('sm')]: {
                                    fontSize: 20,
                                    fontWeight: 400,
                                },
                            }}
                        >
                            It’s important to take steps throughout the duration of your project to align on the solutions, work, and updates. Collaboration ensures success.
                        </Typography>
                    </Box>

                    <Box sx={{
                        marginBottom: '1.5rem',
                        alignItems: "right",
                        [theme.breakpoints.up('xs')]: {
                        },
                        [theme.breakpoints.up('sm')]: {
                            marginLeft: 'auto',
                            marginRight: 2,
                            maxWidth: "60%",
                            pl: 2,
                        },
                    }}
                        pt={5}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            The user comes first
                        </Typography>
                        <Typography variant="body1" sx={{
                            [theme.breakpoints.up('xs')]: {
                            },
                            [theme.breakpoints.up('sm')]: {
                                fontSize: 20,
                                fontWeight: 400,
                            },
                        }}
                        >
                            The user is of utmost importance. Business needs are a close second. Strike the right balance and watch your product take off.
                        </Typography>
                    </Box>

                    <Box sx={{
                        marginBottom: '1.5rem',
                        alignItems: "left",
                        [theme.breakpoints.up('xs')]: {
                        },
                        [theme.breakpoints.up('sm')]: {
                            maxWidth: "50%",
                            pl: 2,
                        },
                    }}
                        pt={5}
                    >
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                            Good design matters
                        </Typography>
                        <Typography variant="body1" sx={{
                            [theme.breakpoints.up('xs')]: {
                            },
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
        </Box >
    );
};

export default HowWeWorkSection;