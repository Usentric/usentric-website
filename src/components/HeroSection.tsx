import theme from "@/theme"
import { Box, Typography } from "@mui/material"



const HeroSection: React.FC = () => {

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                borderRadius: 2,
                overflow: 'hidden',
            }}
        >
            <Box
                component="img"
                src="/d90e6fe187cc28e45052693859269148.jpg"
                alt="Hero image showing hands"
                sx={{
                    [theme.breakpoints.up('xs')]: {
                        height: '450px',
                        objectFit: 'cover', // Crop the image to cover the entire box
                        objectPosition: 'top', // Center the crop area, can also be top, bottom, left, right
                        opacity: .30
                    },
                    [theme.breakpoints.up('sm')]: {
                        maxHeight: '450px',
                        objectFit: 'cover', // Crop the image to cover the entire box
                        overflow: 'hidden'
                    },
                    [theme.breakpoints.up('md')]: {
                        width: "100%",
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
                    },
                    [theme.breakpoints.up('sm')]: {
                        width: '90%',
                        fontSize: "48px",
                        fontWeight: 500,
                    },
                    [theme.breakpoints.up('md')]: {
                        m: 'auto',
                        maxWidth: '65%',
                        fontSize: "56px",
                        fontWeight: 500,
                    },
                    [theme.breakpoints.up('lg')]: {
                        maxWidth: '60%',
                    },
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: 'text.primary'
                }}
            >
                We bring simplicity to a complex digital world. We offer effortless web design and tech solutions.
            </Typography>
        </Box>
    )
}


export default HeroSection