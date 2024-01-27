import { POSTS_URL2 } from '@/src/config/app-config';
import { PostData } from '@/src/domain/posts/post';
import { fetchJson } from '@/src/utils/fetch-json';

export const getPost = async (
    slug: string | string[] | undefined,
): Promise<PostData[]> => {
    try {
        const slugString = Array.isArray(slug) ? slug[0] : slug;
        const url = `${POSTS_URL2}?&filters[slug][$eq]=${slugString}`;
        console.log(url);
        const jsonPosts = await fetchJson<PostData[]>(url);
        return jsonPosts;
    } catch (error) {
        console.error('erro ao obter post', error);
        throw error;
    }
};
