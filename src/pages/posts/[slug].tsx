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
    const posts = await getAllPosts(`&pagination[limit]=${numberOfPosts}`);
    return {
        paths: posts.map((post) => {
            return {
                params: {
                    slug: post.attributes.slug,
                },
            };
        }),
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
    const slug = ctx.params?.slug as string;
    const post = await getPost(slug);
    console.log(slug);
    return {
        props: { post },
    };
};
