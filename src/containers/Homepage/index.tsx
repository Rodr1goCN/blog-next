import { PostData } from '@/src/domain/posts/post';
import { Container } from './style';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';

export type HomePageProps = {
    posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Header />
            <MainContainer>
                <Container>
                    {posts.map((post) => (
                        <h2
                            style={{ background: 'red' }}
                            key={post.attributes.slug}
                        >
                            {post.attributes.title}
                        </h2>
                    ))}
                </Container>
            </MainContainer>
        </>
    );
}
