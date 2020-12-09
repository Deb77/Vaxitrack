import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: "#a43f49",
        secondary: "#fff",
        disabled: "#333",
        error: "#CF6679"
    },
}

const Theme = ({ children }) => 
    <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme;