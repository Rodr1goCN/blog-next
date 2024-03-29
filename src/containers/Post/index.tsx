import { PostContainer } from '@/src/components/PostContainer';
import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { Heading } from '@/src/components/Heading';
import { MainContainer } from '@/src/components/MainContainer';
import { PostCover } from '@/src/components/PostCover';
import { PostDetails } from '@/src/components/PostDetails';
import { PostData } from '@/src/domain/posts/post';
import { Comments } from '@/src/components/comments';
import Head from 'next/head';
import { SITE_NAME } from '@/src/config/app-config';
import { removeHtml } from '@/src/utils/remove-html';

export type PostProps = {
    post: PostData;
};

export const Post = ({ post }: PostProps) => {
    return (
        <>
            <Head>
                <title>
                    {post.title} - {SITE_NAME}
                </title>
                <meta
                    name="description"
                    content={removeHtml(post.content).slice(0, 150)}
                />
            </Head>
            <Header />

            <MainContainer>
                <Heading>{post.title}</Heading>
                <PostCover
                    coverUrl={post.cover.formats.small.url}
                    alt={post.title}
                />
                <PostDetails
                    author={post.author.name}
                    category={post.category.name}
                    date={post.created_at}
                />
                <div>
                    <PostContainer content={post.content} />
                </div>
                <Comments title={post.title} slug={post.slug} />
            </MainContainer>

            <Footer />
        </>
    );
};
