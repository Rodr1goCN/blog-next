import { PaginationData } from '@/src/domain/posts/pagination';
import { Container, NextLink, PreviousLink, StyledLink } from './styled';
import Link from 'next/link';

export type PaginationProps = PaginationData;

export const Pagination = ({
    nextPage,
    category,
    numberOfPosts,
    postsPerPage,
    previousPage,
}: PaginationProps) => {
    const categoryName = category || '';
    const nextLink = `/posts/page/${nextPage}/${categoryName}`;
    const previousLink = `/posts/page/${previousPage}/${categoryName}`;
    const hasNextPage =
        nextPage !== undefined &&
        numberOfPosts !== undefined &&
        postsPerPage !== undefined &&
        nextPage * postsPerPage < postsPerPage + numberOfPosts;
    const hasPreviousPage = previousPage !== undefined && previousPage >= 1;
    return (
        <Container>
            {hasPreviousPage && (
                <PreviousLink>
                    <Link href={previousLink}>
                        <StyledLink>Anterior</StyledLink>
                    </Link>
                </PreviousLink>
            )}
            {hasNextPage && (
                <NextLink>
                    <Link href={nextLink}>
                        <StyledLink>Próximo</StyledLink>
                    </Link>
                </NextLink>
            )}
        </Container>
    );
};
