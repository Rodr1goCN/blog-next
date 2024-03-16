import Link from 'next/link';
import { Container, PostCardCover, PostCardHeading } from './styled';

export type PostCardProps = {
    slug: string;
    title: string;
    cover: string;
};

export const PostCard = ({ slug, title, cover }: PostCardProps) => {
    const postHref = `/posts/[slug]`;
    const postAs = `/posts/${slug}`;
    return (
        <Container>
            <PostCardCover>
                <Link href={postHref} as={postAs}>
                    <img src={cover} alt={title} />
                </Link>
            </PostCardCover>
            <PostCardHeading>
                <Link href={postHref} as={postAs}>
                    {title}
                </Link>
            </PostCardHeading>
        </Container>
    );
};
