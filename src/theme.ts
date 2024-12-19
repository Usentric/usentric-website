"use client"
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#03070D',
        },
        background: {
            default: '#03070D', // Main background
            paper: '#03070D', // Card backgrounds
        },
        text: {
            primary: '#ffffff', // Main text
            secondary: '#b0bec5', // Lighter secondary text
        },
    },
    typography: {
        fontFamily: 'Inter, Arial, sans-serif', // Set Inter as the default font
        h1: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
        h2: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
        h3: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
        h4: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
        h5: {
          fontFamily: 'Inter, Arial, sans-serif',
          fontWeight: 700,
          color: '#ffffff', // White color for h5
        },
        h6: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
        subtitle1: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
        subtitle2: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
        body1: {
          fontFamily: 'Inter, Arial, sans-serif',
          fontSize: '1rem',
          color: '#b0bec5', // Lighter gray color for body1 text
        },
        body2: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
        button: {
          fontFamily: 'Inter, Arial, sans-serif',
          color: '#03070D', // Custom button text color
          textTransform: 'none', // Ensure buttons don't transform text
        },
        caption: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
        overline: {
          fontFamily: 'Inter, Arial, sans-serif',
        },
      },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#03070D', // Match the primary color
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#ffffff',
                    borderRadius: 8,
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    backgroundColor: '#03070D',
                    color: '#ffffff',
                    borderRadius: 8,
                    boxShadow: 'none', // Remove shadow if not needed
                },
            },
        },
    },
});

export default theme;