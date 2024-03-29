import Link from 'next/link';
import { Date } from '../Date';
import { Container } from './styled';

export type PostDetailsProps = {
    date: string;
    author: string;
    category: string;
};

export const PostDetails = ({ date, author, category }: PostDetailsProps) => {
    return (
        <Container>
            Publicado em <Date date={date} /> por {author} | categoria:{' '}
            <Link href={`/posts/page/1/${category.toLowerCase()}`}>
                {category}
            </Link>
        </Container>
    );
};
