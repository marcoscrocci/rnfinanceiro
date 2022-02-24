import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ThemeProvider } from 'styled-components/native';
import { Home } from "./src/screens/Home";
import theme from './src/theme';

export default function App() {

    return (
        <ThemeProvider theme={theme}>
            <Home />
            <StatusBar style="auto" />
        </ThemeProvider>
    );
}

