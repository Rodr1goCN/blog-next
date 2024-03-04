import HomePage from '@/src/containers/Homepage';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { PostData } from '@/src/domain/posts/post';
import { GetServerSideProps } from 'next';

export type CategoryProps = {
    posts: PostData[];
    category: string;
};

export default function Category({ posts, category }: CategoryProps) {
    return <HomePage posts={posts} category={category} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const urlQuery = `_sort=id:desc&_start=0&_limit=30&category.name_contains=${ctx.query.category}`;
    // asc -> crescente // desc -> descrecente
    const posts = await getAllPosts(urlQuery);
    return {
        props: { posts, category: ctx.query.category },
    };
};
