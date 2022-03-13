import styled, { css } from "styled-components/native";
import {
    getStatusBarHeight,
    getBottomSpace,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
    ${({ theme }) => css`
        flex: 1;
        background-color: ${theme.colors.background};
        align-items: center;
        justify-content: center;
        padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px;
    `}
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: 44px;
        color: ${theme.colors.color};
    `}
`;
