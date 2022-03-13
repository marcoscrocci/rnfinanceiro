import styled, { css } from "styled-components/native";
import {
    getStatusBarHeight,
    getBottomSpace,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
    ${() => css`
        flex: 1;
        background-color: ${(props) => props.theme.colors.background};
        align-items: center;
        justify-content: center;
        padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px;
    `}
`;

export const Title = styled.Text`
    ${() => css`
        font-size: 44px;
        color: ${(props) => props.theme.colors.color};
    `}
`;
