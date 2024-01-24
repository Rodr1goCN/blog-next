import HomePage from '../containers/Homepage';
import { getAllPosts } from '../data/posts/get-all-posts';
import { PostData } from '../domain/posts/post';
import { GetStaticProps } from 'next';

export type HompeProps = {
    posts: PostData[];
};

export default function Home({ posts }: HompeProps) {
    return <HomePage posts={posts} />;
}

export const getStaticProps: GetStaticProps = async () => {
    // asc -> crescente // desc -> descrecente
    const posts = await getAllPosts(
        'sort=id:desc&pagination[start]=0&pagination[limit]=10',
    );

    return {
        props: { posts },
        //revalidate: 5,
    };
};
