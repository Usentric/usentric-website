import theme from "@/theme"
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { Box, Collapse, ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText, Typography, useMediaQuery } from "@mui/material"
import { useState } from "react"

interface CollapasbleInfoBoxProps {
    Icon: string,
    Title: string,
    Body: string,
    url: string
}
const CollapasbleInfoBox = ({ Icon, Title, Body, url }: CollapasbleInfoBoxProps) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(prevState => !prevState);
    }

    const notSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));


    return (
        <Box key={Title} border={1} padding={2}
            mb={2}
            borderRadius={2} borderColor={"#BFBFBF80"}
            sx={{
                width: { md: "49%", lg: "49%" },
                textDecoration: 'none',
                color: 'inherit',
                // cursor: 'pointer',
            }}
        >
            <ListItem
            >
                <ListItemIcon
                    sx={{
                        width: '100%'
                    }}
                >
                    <Box
                        component="a"
                        href={url}
                        sx={{
                            textDecoration: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <img src={Icon} alt={`${Title} icon`} style={{ width: '28px', height: '28px' }} />
                    </Box>
                </ListItemIcon>
            </ListItem>
            <ListItem>
                <ListItemText
                    disableTypography
                    primary={
                        <Box
                            component={url != "" ? "a" : "div"}
                            href={url != "" ? url : undefined}
                            sx={{
                                textDecoration: url ? '2px underline white' : 'none',
                                cursor: url ? 'pointer' : 'default',
                            }}
                        >
                            <Typography color="text.primary" fontSize={"20px"} fontWeight={600}>
                                {Title}
                            </Typography>
                        </Box>
                    }
                />
                {
                    notSmallScreen &&
                    <ListItemSecondaryAction
                        onClick={handleClick}
                        sx={{
                            cursor: 'pointer',
                        }}
                    >
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </ListItemSecondaryAction>
                }
            </ListItem>
            {
                notSmallScreen ?
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box
                            m={2}
                            mt={0}
                        >
                            <Typography variant="body1" color={"#FFFFFF99"}>
                                {Body}
                            </Typography>
                        </Box>
                    </Collapse> :
                    <Box
                        m={2}
                        mt={0}

                    >
                        <Typography variant="body1" color={"#FFFFFF99"}
                            sx={{
                                [theme.breakpoints.up('sm')]: {
                                    fontSize: 20,
                                    fontWeight: 400,
                                }
                            }}

                        >
                            {Body}
                        </Typography>
                    </Box>
            }
        </Box>
    )
}


export default CollapasbleInfoBox