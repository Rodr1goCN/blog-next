import { PostData } from '@/src/domain/posts/post';
import { Container } from './style';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostCard } from '@/src/components/PostCard';

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
                        <PostCard
                            key={post.id}
                            cover={
                                post.attributes.cover.data.attributes.formats
                                    .small.url
                            }
                            slug={post.attributes.slug}
                            title={post.attributes.title}
                        />
                    ))}
                </Container>
            </MainContainer>
        </>
    );
}
