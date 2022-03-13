import { StatusBar } from "expo-status-bar";
import React from "react";
//import { ThemeProvider } from 'styled-components';
//import { useColorScheme, Text } from 'react-native'
import { Theme } from './src/templates/theme';

import { Home } from "./src/pages/Home";
//import themes from './src/themes';


export default function App() {

    //const colorScheme = useColorScheme();
    //const theme = themes[colorScheme === 'dark' ? 'dark' : 'light'];

    return (
        <>
            <StatusBar style="auto" />
            <Theme>
                <Home />
            </Theme>
        </>
    );
}

