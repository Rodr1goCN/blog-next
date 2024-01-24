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
                <Link href="/post/[slug]" as={`/post/${slug}`}>
                    <img src={cover} alt={title} />
                </Link>
            </PostCardCover>
            <PostCardHeading>
                <Link href="/post/" as={`/post/${slug}`}>
                    {title}
                </Link>
            </PostCardHeading>
        </Container>
    );
};
