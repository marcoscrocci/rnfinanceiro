import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from 'styled-components';
import { useColorScheme, Text } from 'react-native'

import { Home } from "./src/screens/Home";
import themes from './src/themes';


export default function App() {

    const colorScheme = useColorScheme();
    const theme = themes[colorScheme === 'dark' ? 'dark' : 'light'];

    return (
        <ThemeProvider theme={theme}>
            <Home />
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}

