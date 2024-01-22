import { PostData } from '@/src/domain/posts/post';
import { Container } from './style';
import { Header } from '@/src/components/Header';

export type HomePageProps = {
    posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Header />
            <Container>
                {posts.map((post) => (
                    <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
                ))}
            </Container>
        </>
    );
}
