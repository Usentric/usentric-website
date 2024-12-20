"use client"

import { Box, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HeaderBar from "./Headerbar";
import theme from "@/theme";
import TextInfoBox from "./TextInfoBox";
import ServiceOffering from "./ServiceOffering";
import ConctactUsCard from "./ContactUsCard";

interface headerInfoProps {
    title: string,
    body: string,
    pageTitle: string,
    homeImgSrc: string
}

interface bodyInfoData {
    title: string,
    body: string
}

interface serviceOfferingDataProps {
    title: string,
    body: string
}

interface IndividualPageProps {
    headerInfo: headerInfoProps,
    bodyInfoData: bodyInfoData[],
    serviceOfferingData: serviceOfferingDataProps[]
}

export default function IndividualPage({ headerInfo, bodyInfoData, serviceOfferingData }: IndividualPageProps) {
    const homeRef = useRef<HTMLDivElement>(null);
    const aboutUsRef = useRef<HTMLDivElement>(null);
    const ourWorkRef = useRef<HTMLDivElement>(null);
    const contactUsRef = useRef<HTMLDivElement>(null);
    const [activeSection, setActiveSection] = useState<string>('homeRef');



    const handleChipClick = (section: string) => {
        const refs: { [key: string]: React.RefObject<HTMLDivElement | null> } = {
            homeRef: homeRef,
            aboutUsRef: aboutUsRef,
            ourWorkRef: ourWorkRef,
            contactUsSection: contactUsRef,
          };

        const headerHeight = 64;
        const marginOffsets: { [key: string]: number } = {
            homeRef: 10,
            aboutUsRef: 10,
            ourWorkRef: 10,
            contactUsSection: 10,
        };

        const targetRef = refs[section];
        if (targetRef.current) {
            const elementTop = targetRef.current.getBoundingClientRect().top;
            const offsetPosition = window.scrollY + elementTop - headerHeight - marginOffsets[section];

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const options: IntersectionObserverInit = {
            root: null, // viewport
            rootMargin: '0px',
            threshold: .6, // trigger when 60% of the section is in view
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, options);

        const sections = [homeRef, aboutUsRef, ourWorkRef, contactUsRef];
        sections.forEach((section) => {
            if (section.current) observer.observe(section.current);
        });

        return () => {
            sections.forEach((section) => {
                if (section.current) observer.unobserve(section.current);
            });
        };
    }, []);

    return (
        <Box
            sx={{
                maxWidth: { sm: '800px', md: '1100px', lg: '1500px' },
            }}
        >
            <HeaderBar activeSection={activeSection} onChipClick={handleChipClick} />
            <Box
                sx={{
                    m: { xs: "26px", sm: 6, md: 10 },
                    mt: { xs: 10, sm: 10, md: 15 }
                }}
                id="homeRef"
                ref={homeRef}
            >
                <Box sx={{ mb: 10 }}>
                    {/* Page Title visible on large screens, top of page */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            mb: 4
                        }}
                    >
                        <Typography variant='h6'>
                            {headerInfo.pageTitle}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column-reverse', md: 'row' },
                            gap: { xs: 5, md: 10 },
                            alignItems: 'center',
                            position: 'relative', // needed for absolute positioning
                        }}
                    >
                        {/* Text Box: On large screens, left side; on small, below image */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '25px',
                                width: { md: "50%" }
                            }}
                        >
                            <Typography
                                variant='h3'
                                sx={{
                                    fontSize: { xs: "32px", md: "inherit" },
                                    fontWeight: { xs: 600, md: "inherit" }
                                }}
                            >
                                {headerInfo.title}
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: "20px", md: "inherit" },
                                    fontWeight: { xs: 400, md: "inherit" }
                                }}
                            >
                                {headerInfo.body}
                            </Typography>
                        </Box>

                        {/* Image Container */}
                        <Box
                            component="img"
                            src={headerInfo.homeImgSrc}
                            alt="Hero image showing hands"
                            sx={{
                                [theme.breakpoints.up('xs')]: {
                                    height: '350px',
                                    objectFit: 'cover', // Crop the image to cover the entire box
                                    objectPosition: 'top', // Center the crop area, can also be top, bottom, left, right
                                    opacity: .60
                                },
                                [theme.breakpoints.up('sm')]: {
                                    width: "100%",
                                    maxHeight: '550px',
                                    objectFit: 'cover', // Crop the image to cover the entire box
                                    overflow: 'hidden'
                                },
                                [theme.breakpoints.up('md')]: {
                                    width: "50%",
                                    objectFit: 'cover', // Crop the image to cover the entire box
                                    overflow: 'hidden'
                                },
                                borderRadius: 2,
                            }}
                        />
                        <Typography
                            p={1}
                            sx={{
                                [theme.breakpoints.up('xs')]: {
                                    width: '100%',
                                    fontSize: 24,
                                    fontWeight: 500,
                                    top: '25%',
                                },
                                [theme.breakpoints.up('sm')]: {
                                    width: '90%',
                                    fontSize: "48px",
                                    fontWeight: 500,
                                    top: '28%'
                                },
                                [theme.breakpoints.up('md')]: {
                                    display: "None",
                                },
                                position: 'absolute',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                textAlign: 'center',
                                color: 'text.primary'
                            }}
                        >
                            {headerInfo.pageTitle}
                        </Typography>
                    </Box>
                </Box>
                <Box
                    id="aboutUsRef"
                    ref={aboutUsRef}
                >
                    <Typography variant='h4'
                        sx={{
                            m: "64px 0px",
                            [theme.breakpoints.only('xs')]: {
                                fontSize: "28px",
                                fontWeight: "600",
                                mb: "24px",
                            }
                        }}
                    >
                        Why Choose Us?
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: { sm: "50px 0px", md: "80px 0px" },
                            justifyContent: "space-between",
                        }}
                    >
                        {
                            bodyInfoData.map(item => <TextInfoBox key={item.title} title={item.title} body={item.body} />)
                        }
                    </Box>
                </Box>
                <Box
                    id="ourWorkRef"
                    ref={ourWorkRef}
                    sx={{
                        mt: { sm: 12, md: 15 },
                        mb: { xs: 10, sm: 11, md: 15 },
                        display: "flex",
                        alignItems: "center",
                        flexWrap: "wrap",
                        flexDirection: "column",


                    }}
                >
                    <Typography variant='h3'
                        sx={{
                            mb: { xs: '40px', sm: '40px', md: '64px' },
                            [theme.breakpoints.only('xs')]: {
                                fontSize: "28px",
                                fontWeight: '600',
                                padding: "5px",
                            },
                            [theme.breakpoints.only('sm')]: {
                                fontSize: "38px"
                            },
                            textAlign: 'center',
                        }}
                    >
                        What this service includes:
                    </Typography>
                    <Box
                        sx={{
                            [theme.breakpoints.down('md')]: {
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                gap: "26px",
                                justifyContent: "center",
                            }
                        }}
                    >
                        {
                            serviceOfferingData.map((item, index) => <ServiceOffering key={item.title} index={index} title={item.title} body={item.body} />)
                        }
                    </Box>
                </Box>
                <Box
                    id="contactUsSection"
                    ref={contactUsRef}
                >
                    <ConctactUsCard />
                </Box>
            </Box>
        </Box>
    );
}