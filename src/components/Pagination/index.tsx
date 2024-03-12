import { PaginationData } from '@/src/domain/posts/pagination';
import { Container, NextLink, PreviousLink } from './styled';
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
    const hasNextPage = nextPage * postsPerPage < postsPerPage + numberOfPosts;
    const hasPreviousPage = previousPage >= 1;
    return (
        <Container>
            {hasPreviousPage && (
                <PreviousLink>
                    <Link href={previousLink}>Anterior</Link>
                </PreviousLink>
            )}
            {hasNextPage && (
                <NextLink>
                    <Link href={nextLink}>Próximo</Link>
                </NextLink>
            )}
        </Container>
    );
};
