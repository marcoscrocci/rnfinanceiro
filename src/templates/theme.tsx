import React from "react";
import { useColorScheme } from 'react-native'
//import { useTheme } from "../contexts/theme";

import { ThemeProvider } from "styled-components";
import themes from "../themes";



type Props = {
    children: React.ReactNode
}

export function Theme({children}: Props) {
    //const {currentTheme} = useTheme();
    const colorScheme = useColorScheme();
    const theme = themes[colorScheme === 'dark' ? 'dark' : 'light'];

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}



  