import HomePage from '@/src/containers/Homepage';
import { countAllPosts } from '@/src/data/posts/count-all-posts';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { PaginationData } from '@/src/domain/posts/pagination';
import { PostData } from '@/src/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';

export type PageProps = {
    posts: PostData[];
    category?: string;
    pagination: PaginationData;
};

export default function Page({ posts, category, pagination }: PageProps) {
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

export const getStaticProps: GetStaticProps = async (context) => {
    // mostra em qual página esta
    const page = context.params?.param?.[0]
        ? Number(context.params.param[0])
        : 1;
    // diz qual categoria esta
    const category = context.params?.param?.[1] || '';
    const postsPerPage = 3;
    const startFrom = (page - 1) * postsPerPage;

    const nextPage = page + 1;
    const previousPage = page - 1;

    const categoryQuery = category ? `&category.name_contains=${category}` : '';
    // asc -> crescente // desc -> descrecente
    const urlQuery = `_sort=id:desc&_start=${startFrom}&_limit=${postsPerPage}${categoryQuery}`;

    const posts = await getAllPosts(urlQuery);

    const numberOfPosts = Number(await countAllPosts(categoryQuery));
    const pagination: PaginationData = {
        nextPage,
        category,
        numberOfPosts,
        postsPerPage,
        previousPage,
    };

    return {
        props: { posts, pagination, category },
        //revalidate: 3,
    };
};
