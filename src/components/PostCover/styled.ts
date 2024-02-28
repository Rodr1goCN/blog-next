import styled, { css } from 'styled-components';

export const Container = styled.img`
    ${({ theme }) => css`
        max-width: 100%;
        margin-bottom: ${theme.spacings.medium};
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 0%);
    `}
`;
