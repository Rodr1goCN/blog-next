import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';

export type PostCartProps = {
    slug: string;
    title: string;
    cover: string;
};

export const PostCard = ({ slug, title, cover }: PostCartProps) => {
    return (
        <Container>
            <PostCardCover>
                <Link href="/api/posts-p/[slug]" as={`/api/posts-p/${slug}`}>
                    <img src={cover} alt={title} />
                </Link>
            </PostCardCover>
            <PostCardHeading>
                <Link href="/api/posts-p/" as={`/api/posts-p/${slug}`}>
                    {title}
                </Link>
            </PostCardHeading>
        </Container>
    );
};
