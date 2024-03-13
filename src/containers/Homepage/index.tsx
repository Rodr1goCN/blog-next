import Head from 'next/head';
import { PostData } from '@/src/domain/posts/post';
import { AllPostsLinks, Category, Container } from './style';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostCard } from '@/src/components/PostCard';
import { Footer } from '@/src/components/Footer';
import { SITE_NAME } from '@/src/config/app-config';
import { PaginationData } from '@/src/domain/posts/pagination';
import { Pagination } from '@/src/components/Pagination';
import Link from 'next/link';

export type HomePageProps = {
    posts: PostData[];
    category?: string;
    pagination?: PaginationData;
};

export default function HomePage({
    posts,
    category,
    pagination,
}: HomePageProps) {
    return (
        <>
            <Head>
                <title>
                    {category
                        ? `${category.toString()} - ${SITE_NAME}`
                        : SITE_NAME}{' '}
                    {pagination?.nextPage &&
                        ` - Página ${(pagination.nextPage - 1).toString()}`}
                </title>
                <meta
                    name="description"
                    content="Este é o meu primeiro blog de tecnologia"
                />
            </Head>
            <Header />
            {category && <Category>Categoria: {category}</Category>}
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
                <Pagination {...pagination} />
                {!pagination?.nextPage && (
                    <Link href="/posts/page/[...param]" as="/posts/page/1">
                        <AllPostsLinks>Ver todos posts</AllPostsLinks>
                    </Link>
                )}
            </MainContainer>
            <Footer />
        </>
    );
}
