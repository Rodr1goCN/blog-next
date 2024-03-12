import styled, { css } from 'styled-components';

export const Container = styled.footer`
    ${({ theme }) => css`
        text-align: center;
        margin: ${theme.spacings.medium};
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.small};
    `}
    a {
        text-decoration: none;
        color: #000000;
    }

    a:hover {
        color: #183ced;
        text-decoration: underline dotted #000000;
    }
`;
