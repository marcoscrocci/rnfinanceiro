import styled from "styled-components/native";
import {
    getStatusBarHeight,
    getBottomSpace,
} from "react-native-iphone-x-helper";

export const Container = styled.View`
    flex: 1;
    background-color: ${(props) => props.theme.background };
    align-items: center;
    justify-content: center;
    padding: ${getStatusBarHeight() + 24}px 24px ${getBottomSpace() + 14}px;
`;

export const Title = styled.Text`
    font-size: 44px;
    color: ${(props) => props.theme.color };
`;
