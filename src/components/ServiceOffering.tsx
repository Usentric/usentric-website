import theme from "@/theme"
import { Box, Typography } from "@mui/material"
import React from "react"


interface ServiceOfferingProps {
    title: string,
    body: string,
    index: number,
}

const ServiceOffering: React.FC<ServiceOfferingProps> = ({ title, body, index }) => {

    const boxSx = {
        [theme.breakpoints.only('xs')]: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
        },
        [theme.breakpoints.only('sm')]: {
            width: "45%",
            display: "flex",
            flexDirection: "column",
        },
        [theme.breakpoints.up('md')]: {
            width: "812px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "28px",
            borderTop: index === 0 ? "none" : "1px solid grey",
            borderBottom: index === 0 ? "1px solid grey" : "none",
            padding: "32px 0px",
        }
    }

    return (
        <Box
            sx={boxSx}
        >
            <Typography
                variant='subtitle1'
                sx={{
                    width: { md: "40%" },
                    [theme.breakpoints.only('xs')]: {
                        fontSize: "20px",
                        fontWeight: "600",
                    }
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    width: { md: "60%" },
                    [theme.breakpoints.only('xs')]: {
                        fontSize: "20px",
                    }
                }}
            >
                {body}
            </Typography>
        </Box>
    )
}


export default ServiceOffering