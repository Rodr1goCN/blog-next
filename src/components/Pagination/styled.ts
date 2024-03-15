import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: ${({ theme }) => theme.spacings.large} 0;
`;
export const PreviousLink = styled.div``;
export const NextLink = styled.div`
    margin-left: auto;
`;

export const StyledLink = styled.a`
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
