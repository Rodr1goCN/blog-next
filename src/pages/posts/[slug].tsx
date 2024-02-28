import { countAllPosts } from '@/src/data/posts/count-all-posts';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { getPost } from '@/src/data/posts/get-post';
import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import Markdown from 'react-markdown';

export type DynamicPostProps = {
    post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
    return (
        <>
            <p>{post.title}</p>
            <Markdown>{post.content}</Markdown>
        </>
    );
};

export default DynamicPost;

export const getStaticPaths = (async () => {
    const numberOfPosts = await countAllPosts();
    const posts = await getAllPosts(`_limit=${numberOfPosts}`);
    /* const posts = await getAllPosts(`pagination[limit]=${numberOfPosts}`); */
    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.slug,
                },
            };
        }),
        fallback: false,
    };
}) satisfies GetStaticPaths;

export const getStaticProps = (async (ctx) => {
    const posts = await getPost(ctx.params?.slug);
    const post = posts.length > 0 ? posts[0] : {};
    /* const slug = ctx.params?.slug as string;
    const post = await getPost(slug); */
    return {
        props: { post },
    };
}) satisfies GetStaticProps;
