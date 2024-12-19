import { Box, List, Typography, useMediaQuery } from '@mui/material';
import CollapasbleInfoBox from './shared/CollapsableInfoBox';
import theme from '@/theme';

const servicesData = [
    {
        Icon: "/monitor-03.svg",
        Title: "Web Design",
        url: "/design",
        Body: "Your website is your digital storefront, and great web design can make all the difference in attracting and retaining customers. Let us help you create a visually stunning and user-friendly website that leaves a lasting impression on your visitors."
    },
    {
        Icon: "/code-square-02.svg",
        Title: "Web Development",
        url: "/development",
        Body: "Web development is the backbone of your online presence, and it's crucial to ensure that your website is built with the latest technologies and best practices. We build robust and scalable web applications that sets your business up for success."
    },
    {
        Icon: "/film-02.svg",
        Title: "Product Management",
        url: "/product",
        Body: "Our product management team expertly navigates the product lifecycle, balancing technical feasibility with user needs and business goals. We guide your product from concept to market, defining roadmaps and coordinating cross-functional teams to ensure it meets and exceeds market expectations."
    },
    {
        Icon: "/line-chart-up-03.svg",
        Title: "User Research",
        url: "/research",
        Body: "Our user research experts use qualitative and quantitative methods to uncover deep insights about your target audience. By understanding user needs, behaviors, and motivations, we ensure your products align with customer expectations, enhancing usability and satisfaction."
    },
    {
        Icon: "/palette.svg",
        Title: "Beginning-to-End Branding",
        url: "/branding",
        Body: "The cost of finding a mistake after your product hits the market can be four to five times as costly as if that error was corrected during the design phase. We get the right design, the first time."
    },
    {
        Icon: "/ellipsies-01.svg",
        Title: "Other",
        url: "",
        Body: "Need something else? Need help with content or social media? No problem. Want a comprehensive digital strategy? On it. Pitching to investors and want a world-class deck? Say no more. Send us a message describing your needs and we can figure something out."
    }
]

const WhatWeOffer = () => {

    const isMdUp = useMediaQuery(theme.breakpoints.up('sm'))
    return (
        <>
            <Box sx={{
                mt: 12,
                mb: 2,
            }}
            >
                <Typography
                    sx={{
                        color: '#FFFFFF99',
                        [theme.breakpoints.up("sm")]: {
                            fontSize: 20,
                            fontWeight: 400,
                        }
                    }}
                >
                    What we offer
                </Typography>
            </Box>
            < Box sx={{
            }} >
                <List
                    sx={{
                        display: 'flex',
                        flexDirection: isMdUp ? "row" : "column",
                        flexWrap: 'wrap', // Ensures that items wrap to the next line if there's not enough space
                        gap: 2, // Adds spacing between items, adjust as needed 
                    }}
                >
                    {
                        servicesData.map(service =>
                            <CollapasbleInfoBox key={service.Title} Icon={service.Icon} Title={service.Title} Body={service.Body} url={service.url} />
                        )
                    }
                </List>
            </Box >
        </>
    )
}


export default WhatWeOffer