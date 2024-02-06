import { GetStaticProps } from 'next';
import HomePage from '../containers/Homepage';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';

export type HomeProps = {
    posts: PostData[];
    name: string;
    stargazers_count: number;
};

export default function Home({ posts }: HomeProps) {
    return <HomePage posts={posts} />;
}

/* export default function Home({
    posts,
}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <HomePage posts={posts} />;
} */

export const getStaticProps: GetStaticProps = async () => {
    // asc -> crescente // desc -> descrecente
    const posts = await getAllPosts(
        'sort=id:desc&pagination[start]=0&pagination[limit]=9',
    );
    return {
        props: { posts },
    };
};
