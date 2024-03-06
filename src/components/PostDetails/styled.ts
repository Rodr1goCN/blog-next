import styled, { css } from 'styled-components';

export const Container = styled.div`
    ${({ theme }) => css`
        color: ${theme.colors.gray};
        font-size: ${theme.font.sizes.small};
        margin: ${theme.spacings.small} 0;
        font-style: italic;
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
