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
    const posts = await getAllPosts();

    return {
        props: { posts },
        //revalidate: 5,
    };
};
