import styled, { css } from 'styled-components';

export const Container = styled.main`
    ${({ theme }) => css`
        max-width: 96rem;
        font-size: ${theme.font.sizes.medium};
        display: flex;
        justify-content: center;
        padding: ${theme.spacings.medium};
    `}
`;
