import { PaginationData } from '@/src/domain/posts/pagination';
import { Container } from './styled';

export type PaginationProps = PaginationData;

export const Pagination = ({
    nextPage,
    category,
    numberOfPosts,
    postsPerPage,
    previousPage,
}: PaginationProps) => {
    return <Container></Container>;
};
