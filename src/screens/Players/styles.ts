import { UsersThree } from "phosphor-react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`

    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    padding: 24px;

`

export const Form = styled.View`

    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    flex-direction: row;
    justify-content: center;
    border-radius: 6px;

`

export const HeaderList = styled.View`

    width: 100%;

    flex-direction: row;
    align-items: center;

    margin: 32px 0 32px;

`

export const NumberOfPlayer = styled.Text`

    ${({ theme }) => css`
    
        color: ${theme.COLORS.GRAY_200};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;

    `};

`
// export const Content = styled.View`

//     flex: 1;
//     justify-content: center;

// `

// export const Icon = styled(UsersThree).attrs(({ theme }) =>({
//     size: 56,
//     color: theme.COLORS.GREEN_700
// }))`

//     align-self: center;

// `;