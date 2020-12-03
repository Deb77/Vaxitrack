import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
    colors: {
        primary: "#a43f49",
        secondary: "#fff"
    },
}

const Theme = ({ children }) => 
    <ThemeProvider theme={theme}>{children}</ThemeProvider>

export default Theme;