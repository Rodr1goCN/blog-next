import styled, { css } from 'styled-components';

export const Container = styled.div`
    transition: 300ms ease-in-out;

    &:hover {
        opacity: 0.9;
    }
    img:hover {
        transform: scale(1.01);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.6);
        transition: transform 0.3s ease-in-out;
    }
`;

export const PostCardCover = styled.div`
    margin-bottom: ${({ theme }) => theme.spacings.small};

    img {
        width: 100%;
        display: block;
    }
`;

export const PostCardHeading = styled.h2`
    ${({ theme }) => css`
        font-size: ${theme.font.sizes.medium};

        a {
            color: ${theme.colors.darkGray};
            text-decoration: none;
        }
    `}
`;
