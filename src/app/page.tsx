"use client"
import { Box, Typography, Button, Grid, Card, CardContent, CardMedia, List, ListItem, Collapse, ListItemSecondaryAction, ListItemIcon } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MonitorIcon from '@mui/icons-material/Monitor';
import { useEffect, useRef, useState } from 'react';
import HowWeWorkSection from '@/components/HowWeWorkSection';
import WorkCarousel from '@/components/WorkCarousel';
import ConctactUsCard from '@/components/ContactUsCard';
import theme from '@/theme';
import HeaderBar from '@/components/Headerbar';
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import WhatWeOffer from '@/components/WhatWeOffer';

export default function Home() {

  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutUsRef = useRef<HTMLDivElement | null>(null);
  const ourWorkRef = useRef<HTMLDivElement | null>(null);
  const contactUsRef = useRef<HTMLDivElement | null>(null);
  const [activeSection, setActiveSection] = useState<string>('homeRef');

  const handleChipClick = (section: string) => {
    const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
      homeRef: homeRef,
      aboutUsRef: aboutUsRef,
      ourWorkRef: ourWorkRef,
      contactUsSection: contactUsRef,
    };

    const headerHeight = 64; // Replace with your header's height
    const marginOffsets: { [key: string]: number } = {
      homeRef: 10, // The margin you gave to homeRef
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
        maxWidth: { xs: '400px', sm: '800px', md: '1100px', lg: '1500px' },
      }}
    >
      <HeaderBar activeSection={activeSection} onChipClick={handleChipClick} />
      <Box
        sx={{
          m: { xs: 2, sm: 2, md: 10 },
          mt: { xs: 5, sm: 10, md: 15 }
        }}
        id="homeRef"
        ref={homeRef}
      >
        <HeroSection />
      </Box>
      <Box sx={{
        m: { xs: 2, sm: 2, md: 10 }
      }}
      >
        <AboutUs />
      </Box >
      <Box sx={{
        m: { xs: 2, sm: 2, md: 10 }
      }}
        id="aboutUsRef"
        ref={aboutUsRef}
      >
        <WhatWeOffer />
      </Box>
      <Box sx={{
        m: { xs: 2, sm: 2, md: 10 }
      }}
        id="ourWorkRef"
        ref={ourWorkRef}
      >
        <WorkCarousel />
      </Box>
      <Box
      >
        <HowWeWorkSection />
      </Box>
      <Box sx={{
        m: { xs: 2, sm: 2, md: 10 }
      }}
        mb={"50px"}
        id="contactUsSection"
        ref={contactUsRef}
      >
        <ConctactUsCard />
      </Box>
    </Box>
  );
}