import { PostData } from '../domain/posts/post';
import { GetStaticProps } from 'next';

const getPosts = async (): Promise<PostData[]> => {
    const posts = await fetch(
        'https://blog-strapi-pmno.onrender.com/api/posts-p',
    );
    const jsonPosts = await posts.json();
    return jsonPosts.data;
};

export type HompeProps = {
    posts: PostData[];
};

export default function Home({ posts }): HompeProps {
    return (
        <div>
            {posts.map((post) => (
                <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
            ))}
        </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = await getPosts();

    return {
        props: { posts },
        //revalidate: 5,
    };
};
