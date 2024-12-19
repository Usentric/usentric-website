import React, { useState } from 'react';
import { Box } from '@mui/material';

interface LargeScreenImageCarouselProps {
    images: Array<{ imgLink: string; color: string; alt: string }>;
}

const LargeScreenImageCarousel: React.FC<LargeScreenImageCarouselProps> = ({ images }) => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: "500px" }}>
            {images.map((data, index) => (
                <Box
                    key={data.alt}
                    borderRadius={2}
                    m={1}
                    overflow="hidden"
                    sx={{
                        bgcolor: data.color,
                        display: 'flex',
                        flex: hoveredIndex === index ? 1 : 0.5,
                        transition: 'flex 0.5s ease-in-out',
                        cursor: 'pointer',
                        width: "100%"
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(index)} 
                    
                >
                    <Box width={"100%"} m={2}
                        overflow="hidden"

                    >
                        <Box
                            sx={{
                                backgroundRepeat: 'no-repeat',
                                backgroundImage: `url(${data.imgLink})`,
                                backgroundSize: hoveredIndex === index ? '80%' : '150%',
                                backgroundPosition: hoveredIndex === index ? 'center' : "0% 50%",
                                width: '100%',
                                height: '100%',
                                transition: 'background-size 0.5s ease-in-out, background-position 0.5s ease-in-out',
                                transform: hoveredIndex === index ? 'scale(1.1)' : 'scale(1)',
                            }}
                        />
                    </Box>
                </Box>
            ))}
        </Box>
    );
};
export default LargeScreenImageCarousel;
