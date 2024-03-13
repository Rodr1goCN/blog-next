import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    grid-gap: 3rem;
`;

export const Category = styled.div`
    text-align: center;
    font-size: ${({ theme }) => theme.font.sizes.large};
    font-weight: bold;
    padding: ${({ theme }) => theme.spacings.small} 0;
`;

export const AllPostsLinks = styled.a`
    display: block;
    text-align: center;
    margin: ${({ theme }) => theme.spacings.large} 0;
    text-decoration: underline #005b96;
    transition: color 0.3s ease;
    &:hover {
        color: ${({ theme }) => theme.colors.gray};
        text-decoration: underline #005b96;
    }
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    padding: 0.5rem 1rem;
    border-radius: 4px;
`;
