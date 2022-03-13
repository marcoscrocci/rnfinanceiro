import theme from "../themes";

type Theme = typeof theme.light;


declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}

