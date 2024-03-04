import Head from 'next/head';
import { PostData } from '@/src/domain/posts/post';
import { Container } from './style';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostCard } from '@/src/components/PostCard';
import { Footer } from '@/src/components/Footer';
import { SITE_NAME } from '@/src/config/app-config';

export type HomePageProps = {
    posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
    return (
        <>
            <Head>
                <title>{SITE_NAME}</title>
                <meta
                    name="description"
                    content="Este é o meu primeiro blog de tecnologia"
                />
            </Head>
            <Header />
            <MainContainer>
                <Container>
                    {posts.map((post) => (
                        <PostCard
                            key={post.id}
                            cover={post.cover.formats.small.url}
                            slug={post.slug}
                            title={post.title}
                        />
                    ))}
                </Container>
            </MainContainer>
            <Footer />
        </>
    );
}
