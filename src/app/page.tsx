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
import HeaderBar from '@/components/shared/headerbar';
import HeroSection from '@/components/HeroSection';
import AboutUs from '@/components/AboutUs';
import WhatWeOffer from '@/components/Services/WhatWeOffer';

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
    refs[section].current?.scrollIntoView({ behavior: 'smooth' });
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

    const sections = [homeRef, aboutUsRef, ourWorkRef];
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
    <>
      <HeaderBar activeSection={activeSection} onChipClick={handleChipClick} />
      <Box m={2}
        id="homeRef"
        ref={homeRef}
      >
        <HeroSection />
      </Box>
      <Box m={2}
        id="aboutUsRef"
        ref={aboutUsRef}
      >
        <AboutUs />
      </Box >
      <Box m={2}>
        <WhatWeOffer />
      </Box>
      <Box m={2}
        id="ourWorkRef"
        ref={ourWorkRef}
      >
        <WorkCarousel />
      </Box>
      <Box
      >
        <HowWeWorkSection />
      </Box>
      <Box m={2}
      mb={"50px"}
        id="contactUsSection"
        ref={contactUsRef}
      >
        <ConctactUsCard />
      </Box>
    </>
  );
}