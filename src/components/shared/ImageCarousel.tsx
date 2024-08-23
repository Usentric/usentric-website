import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { ArrowBackIos } from '@mui/icons-material';

const WorkCarouselData = [
    {
        imgLink: '/Protocol_X_Screen.png',
        color: '#9600DD',
        alt: 'protocolX',
    },
    {
        imgLink: '/lemono_cropped.png',
        color: '#F1F473',
        alt: 'lemono',
    },
    {
        imgLink: '/micdash.jpg',
        color: '#DBB76B',
        alt: 'micdash',
    },
];

const ImageCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const padding = 8; // Example padding in pixels
    const margin = 8; // Example margin in pixels

    const boxWidth = `calc(80% - ${2 * (padding + margin)}px)`;

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === WorkCarouselData.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? WorkCarouselData.length - 1 : prevIndex - 1
        );
    };

    const translateXValue = `calc(-${currentIndex * 80}% + ${currentIndex * 32}px)`;

    return (
        <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <Box
                sx={{
                    display: 'flex',
                    transition: 'transform 0.5s ease-in-out',
                    transform: `translateX(-${currentIndex * 78}%)`,
                }}
            >
                {WorkCarouselData.map((item, index) => (
                    <Box
                        key={index}
                        sx={{
                            minWidth: boxWidth,
                            maxWidth: boxWidth,
                            margin: `${margin}px`, // Margin around each box
                            padding: `${padding}px`, // Padding inside each box
                            backgroundColor: item.color,
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            boxSizing: 'border-box',
                            borderRadius: '16px'
                        }}
                    >
                        <Box
                            component="img"
                            src={item.imgLink}
                            alt={item.alt}
                            sx={{
                                width: '95%',
                                height: '95%',
                                objectFit: 'contain',
                            }}
                        />
                    </Box>
                ))}
            </Box>
            {
                currentIndex != 0 &&
                <IconButton
                    onClick={handlePrev}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '0',
                        transform: 'translateY(-50%)',
                        bgcolor: 'rgba(0,0,0,0.5)',
                        color: '#fff',
                        '&:hover': {
                            bgcolor: 'rgba(0,0,0,0.7)',
                        },
                    }}
                >
                    <ArrowBackIosNewIcon />
                </IconButton>
            }
            {
                currentIndex != WorkCarouselData.length - 1 &&
                <IconButton
                    onClick={handleNext}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        right: '0',
                        transform: 'translateY(-50%)',
                        bgcolor: 'rgba(0,0,0,0.5)',
                        color: '#fff',
                        '&:hover': {
                            bgcolor: 'rgba(0,0,0,0.7)',
                        },
                    }}
                >
                    <ArrowForwardIosIcon />
                </IconButton>
            }
        </Box>
    );
};

export default ImageCarousel;
