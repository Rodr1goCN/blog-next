import HomePage from '@/src/containers/Homepage';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export type PageProps = {
    posts: PostData[];
};

export default function Page({ posts }: PageProps) {
    const router = useRouter();
    if (router.isFallback) return <div>Carregando...</div>;
    if (!posts.length) return <div>Página não encontrada...</div>;
    return <HomePage posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: true,
    };
};

export const getStaticProps: GetStaticProps = async () => {
    // asc -> crescente // desc -> descrecente
    const posts = await getAllPosts('_sort=id:desc&_start=0&_limit=6');
    return {
        props: { posts },
        //revalidate: 3,
    };
};
