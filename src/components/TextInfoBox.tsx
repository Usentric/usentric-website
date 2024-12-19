import theme from "@/theme"
import { Box, Typography } from "@mui/material"


interface TextInfoBoxProps {
    title: string,
    body: string
}

const TextInfoBox: React.FC<TextInfoBoxProps> = ({ title, body }) => {
    return (

        <Box sx={{
            width: { sm: "100%", md: "50%" },
            gap: "20px 0px",
            display: "flex",
            flexWrap: "wrap",
            maxWidth: { lg: "550px" },
            [theme.breakpoints.only('xs')]: {
                fontSize: "20px",
                fontWeight: "400",
                mb: '48px',
            }
        }}>
            <Typography variant='h6'
                sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                }}
            >
                {title}
            </Typography>
            <Typography
                sx={{
                    fontSize: "20px"
                }}
            >
                {body}
            </Typography>
        </Box>
    )
}

export default TextInfoBox