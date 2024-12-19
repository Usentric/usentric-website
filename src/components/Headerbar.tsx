"use client"

import theme from "@/theme"
import { AppBar, Box, Button, Chip, Link, Stack, Toolbar, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"
import { useEffect, useState } from "react"

interface HeaderProps {
    activeSection: string;
    onChipClick: (section: string) => void;
}

const HeaderBar: React.FC<HeaderProps> = ({ activeSection, onChipClick }) => {
    const notSmallScreen = useMediaQuery(theme.breakpoints.up("sm"));

    return (
        <AppBar >
            <Toolbar
                disableGutters
                sx={{ bgcolor: 'background.default', justifyContent: 'space-between', pl: { xs: 2, sm: 2, md: 10 }, pr: { xs: 2, sm: 2, md: 10 } }}>
                <Box
                    component="a"
                    href="/"
                    display="inline-flex"
                    flexDirection="row"
                    sx={{
                        textDecoration: 'none',
                        color: 'inherit',
                        cursor: 'pointer',
                    }}
                >
                    <Box m={1}>
                        <Box component="img" src="/usentric.svg" alt="Usentric Icon" width={24} />
                    </Box>
                    <Box m={1}>
                        <Typography variant="h6" component="div" fontSize={22} fontWeight={600}>
                            Usentric
                        </Typography>
                    </Box>
                </Box>
                {
                    notSmallScreen && <Box border={"1px solid #BFBFBF40"} borderRadius={24} p={.5}
                        width={"300px"} justifyContent={"space-between"} display={"inline-flex"}

                    >
                        <Chip label="HOME"
                            onClick={() => onChipClick('homeRef')}
                            color={activeSection === 'homeRef' ? 'default' : 'primary'} />
                        <Chip label="ABOUT"
                            onClick={() => onChipClick('aboutUsRef')}
                            color={activeSection === 'aboutUsRef' ? 'default' : 'primary'}
                        />
                        <Chip label="OUR WORK"
                            onClick={() => onChipClick('ourWorkRef')}
                            color={activeSection === 'ourWorkRef' ? 'default' : 'primary'}
                        />
                    </Box>
                }
                <Button
                    onClick={() => onChipClick('contactUsSection')}
                    sx={{
                        bgcolor: 'text.primary', borderRadius: '24px', width: theme => theme.spacing(17), height: theme => theme.spacing(4),
                        "&:hover": {
                            bgcolor: 'text.primary'
                        }

                    }}>
                    <Typography color={"#03070D"} fontSize={14} fontWeight={600} component="div">
                        CONTACT US
                    </Typography>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default HeaderBar