import styled, { css } from 'styled-components';

export const Container = styled.header`
    ${({ theme }) => css`
        background: ${theme.colors.primary};
        font-size: ${theme.font.sizes.large};
        padding: ${theme.spacings.medium};
        text-align: center;
    `}

    a {
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        transition: opacity 300ms ease-in-out;

        &:hover {
            opacity: 0.5;
        }
    }
`;
