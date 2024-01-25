import { POSTS_URL } from '@/src/config/app-config';
import { PostData } from '@/src/domain/posts/post';
import { fetchJson } from '@/src/utils/fetch-json';

export const getAllPosts = async (slug = string | string[]): Promise<PostData[]> => {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${POSTS_URL}?slug=${slugString}`
    const posts = await fetchJson<PostData[]>(url);
    return posts;
};
