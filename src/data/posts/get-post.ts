import { POSTS_URL } from '@/src/config/app-config';
import { PostData } from '@/src/domain/posts/post';
import { fetchJson } from '@/src/utils/fetch-json';

export const getPost = async (slug = string): Promise<PostData[]> => {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${POSTS_URL}?slug=${slugString}`;
    const jsonPosts = await fetchJson<PostData[]>(url);
    return jsonPosts;
};
