import { countAllPosts } from '@/src/data/posts/count-all-posts';
import { getAllPosts } from '@/src/data/posts/get-all-posts';
import { GetStaticPaths, GetStaticProps } from 'next';

const FeitoComCarinho = () => {
    return <p>Feito com carinho por Rodrigo</p>;
};

export default FeitoComCarinho;

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
