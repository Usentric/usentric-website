import theme from "@/theme";
import { Box, Button, Card, Input, Stack, TextField, Typography, useMediaQuery } from "@mui/material"
import Link from "next/link"
import { ChangeEvent, FormEvent, useState } from "react";




const ConctactUsCard = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));

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
                p: 2,
            }}
                borderRadius={4}
            >
                <Typography
                    mt={2}
                    mb={2}
                >
                    Contact Us
                </Typography>
                <Typography color={"#FFFFFF"}
                    mb={2}
                    sx={{
                        [theme.breakpoints.up('xs')]: {
                            fontSize: 24,
                            fontWeight: 100,
                        },
                        [theme.breakpoints.up('sm')]: {
                            fontSize: 56,
                            fontWeight: 100,
                        },
                    }}
                >
                    We serve a wide range of clients across a wide range of industries.
                </Typography>
                <Typography color={"#FFFFFF99"}
                    sx={{
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
                    We'd love to work with you. Send us a message with an overview of what you're looking for. We'll get back to you ASAP!
                </Typography>
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
        </Stack >
    )
}


export default ConctactUsCard