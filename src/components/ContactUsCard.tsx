import theme from "@/theme";
import { Box, Button, Card, Input, Stack, TextField, Typography, useMediaQuery } from "@mui/material"
import Link from "next/link"
import { ChangeEvent, FormEvent, useState } from "react";




const ConctactUsCard = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => setDescription(e.target.value);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const mailtoLink = `mailto:joe@usentric.com?subject=Project Inquiry from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0ADescription: ${description}`;

        window.location.href = mailtoLink;
    };
    return (
        <Stack>
            <Box sx={{
                backgroundColor: '#FFFFFF1A',
                p: 4,
                display: { lg: "flex" },
                justifyContent: { lg: "space-between" }
            }}
                borderRadius={4}
            >
                <Box
                    sx={{
                        width: { lg: "50%" }
                    }}
                >
                    <Typography
                        mt={2}
                        mb={2}
                    >
                        Contact Us
                    </Typography>
                    <Typography
                        sx={{
                            color: 'rgba(255, 255, 255, 0.6)',
                            [theme.breakpoints.up('xs')]: {
                                fontSize: 24,
                                fontWeight: 500,
                            },
                            [theme.breakpoints.up('sm')]: {
                                fontSize: 46,
                                fontWeight: 300,
                            },
                        }}
                    >
                        We serve a wide{' '}
                        <Box component="span" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                            range of clients
                        </Box>
                        {' '}across a wide{' '}
                        <Box component="span" sx={{ fontWeight: 'bold', color: '#ffffff' }}>
                            range of industries.
                        </Box>
                    </Typography>
                    <Typography color={"#FFFFFF99"}
                        sx={{
                            width: { lg: '85%' },
                            [theme.breakpoints.up('xs')]: {
                                fontSize: 16,
                                fontWeight: 400,
                            },
                            [theme.breakpoints.up('sm')]: {
                                fontSize: 20,
                                fontWeight: 400,
                            },
                        }}
                    >
                        {`We\'d love to work with you. Send us a message with an overview of what you're looking for. We\'ll get back to you ASAP!`}
                    </Typography>
                </Box>
                <Box
                    p={2}
                    pt={4}
                    sx={{
                        width: { lg: "50%" }
                    }}
                >

                    <form onSubmit={handleSubmit}>
                        <Stack mt={4} spacing={2}>
                            <Stack direction={isSmUp ? "row" : "column"} spacing={2}>
                                <TextField
                                    InputProps={{
                                        sx: {
                                            borderRadius: 8,
                                        },
                                    }}
                                    sx={{
                                        width: { xs: "100%", sm: "50%" }, // 100% width on small screens, 50% on larger screens
                                    }}
                                    label="Name"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                                <TextField
                                    InputProps={{
                                        sx: {
                                            borderRadius: 8,
                                        },
                                    }}
                                    sx={{
                                        width: { xs: "100%", sm: "50%" }, // 100% width on small screens, 50% on larger screens
                                    }}
                                    variant="outlined"
                                    label="Email"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </Stack>
                            <TextField
                                InputProps={{
                                    sx: { borderRadius: 8 }
                                }}
                                variant="outlined"
                                label="Describe your project"
                                multiline
                                rows={4}
                                value={description}
                                onChange={handleDescriptionChange}
                            />
                            <Button
                                sx={{ bgcolor: 'text.primary', borderRadius: '24px' }}
                                type="submit"
                            >
                                <Typography color={"#03070D"}
                                    sx={{
                                        [theme.breakpoints.up('xs')]: {
                                            fontSize: 16,
                                            fontWeight: 600,
                                        },
                                    }}
                                    fontSize={14} fontWeight={600} component="div">
                                    SEND MESSAGE
                                </Typography>
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Box>
        </Stack >
    )
}


export default ConctactUsCard