import { Box, List, Typography, useMediaQuery } from '@mui/material';
import CollapasbleInfoBox from '../shared/CollapsableInfoBox';
import theme from '@/theme';

const servicesData = [
    {
        Icon: "/monitor-03.svg",
        Title: "Web Design",
        Body: "Your website is your digital storefront, and great web design can make all the difference in attracting and retaining customers. Let us help you create a visually stunning and user-friendly website that leaves a lasting impression on your visitors."
    },
    {
        Icon: "/code-square-02.svg",
        Title: "Web Development",
        Body: "Web development is the backbone of your online presence, and it's crucial to ensure that your website is built with the latest technologies and best practices. We build robust and scalable web applications that sets your business up for success."
    },
    {
        Icon: "/line-chart-up-03.svg",
        Title: "SEO Optimization",
        Body: "Rank higher on search engines and drive more traffic to your website. Our team of experts will help you increase your online visibility and outrank your competitors, ensuring that your website is seen by the right audience at the right time."
    },
    {
        Icon: "/film-02.svg",
        Title: "Content Creation",
        Body: "Content is king in the digital world, and our team of skilled writers and creatives will help you develop engaging and shareable content that resonates with your target audience. From blog posts and social media content to video scripts and infographics, we've got you covered."
    },
    {
        Icon: "/palette.svg",
        Title: "Beginning-to-End Branding",
        Body: "The cost of finding a mistake after your product hits the market can be four to five times as costly as if that error was corrected during the design phase. We get the right design, the first time."
    },
    {
        Icon: "/ellipsies-01.svg",
        Title: "Other",
        Body: "Need something else? Need help with content or social media? No problem. Want a comprehensive digital strategy? On it. Pitching to investors and want a world-class deck? Say no more. Send us a message describing your needs and we can figure something out."
    }
]

const WhatWeOffer = () => {


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
            < Box sx={{ mb: 4 }
            }>
                <List>
                    {
                        servicesData.map(service =>
                            <CollapasbleInfoBox key={service.Title} Icon={service.Icon} Title={service.Title} Body={service.Body} />
                        )
                    }
                </List>
            </Box >
        </>
    )
}


export default WhatWeOffer