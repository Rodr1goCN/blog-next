import { countAllPosts } from '@/src/data/posts/count-all-posts';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { getPost } from '@/src/data/posts/get-post';
import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export type DynamicPostProps = {
    post: PostData;
};

const DynamicPost = ({ post }: DynamicPostProps) => {
    return <p>{post.attributes.title}</p>;
};

export default DynamicPost;

export const getStaticPaths: GetStaticPaths = async () => {
    const numberOfPosts = await countAllPosts();
    const posts = await getAllPosts(`_limit=${numberOfPosts}`);

    return {
        paths: posts.map((posts) => {
            return {
                params: {
                    slug: posts.attributes.slug,
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const posts = await getPost(ctx.params?.slug);

    return {
        props: { posts },
        //revalidate: 5,
    };
};
