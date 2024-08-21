import theme from "@/theme"
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material"
import Image from "next/image"
import ImageCarousel from "./shared/ImageCarousel"

interface WorkCarosuelProps {
    imgLink: string,
    color: string,
}

const WorkCarouselData = [
    {
        imgLink: '/Protocol_X_Screen.png',
        color: '#9600DD',
        alt: 'protocolX'
    },
    {
        imgLink: '/lemono_cropped.png',
        color: '#F1F473',
        alt: 'lemono'
    },
    {
        imgLink: '/micdash.jpg',
        color: '#DBB76B',
        alt: 'micdash'
    }
]

const WorkCarousel = () => {

    const notSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
    const notMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
    const notLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <Stack>
            <Box sx={{
                mt: 4,
                mb: 2,
            }}
            >
                <Typography
                    fontSize={16}
                    fontWeight={400}
                    sx={{
                        color: 'text.primary'
                    }}
                >
                    Our Work
                </Typography>
            </Box>
            <Box sx={{
                mt: 2,
                mb: 4,
            }}>
                <Typography
                    sx={{
                        color: 'rgba(255, 255, 255, 0.6)',
                        [theme.breakpoints.up('xs')]: {
                            fontSize: 24,
                            fontWeight: 500,
                        },
                        [theme.breakpoints.up('sm')]: {
                            fontSize: 46,
                            fontWeight: 100,
                        }
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
                {
                    theme.breakpoints.up('sm') && <Button sx={{ m: 2, bgcolor: 'text.primary', borderRadius: '24px', width: theme => theme.spacing(17), height: theme => theme.spacing(4) }}>
                        <Typography color={"#03070D"} fontSize={14} fontWeight={600} component="div">
                            VIEW WORK
                        </Typography>
                    </Button>
                }
            </Box >
            {
                notSmallScreen ?
                WorkCarouselData.map(data => 
                    <Box bgcolor={data.color} key={data.alt} borderRadius={2} mt={2} pt={1.5} pb={1.5} pl={1.5} overflow={"hidden"}>
                        <Image src={data.imgLink} width={350} height={250} style={{ scale: 'crop', }} alt={data.alt} />
                    </Box>
                 )
                 : <ImageCarousel />
            }
        </Stack>
    )
}


export default WorkCarousel