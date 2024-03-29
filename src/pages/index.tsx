import { GetStaticProps } from 'next';
import HomePage from '../containers/Homepage';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';

export type HomeProps = {
    posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
    return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
    // asc -> crescente // desc -> descrecente
    const posts = await getAllPosts('_sort=id:desc&_start=0&_limit=6');
    return {
        props: { posts },
        //revalidate: 3,
    };
};

/* const posts = await getAllPosts(
    'sort=id:desc&pagination[start]=0&pagination[limit]=9',
); */
