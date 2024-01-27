import { POSTS_URL2 } from '@/src/config/app-config';
import { fetchJson } from '@/src/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
    const url = `${POSTS_URL2}?pagination[start]=1&pagination[pageSize]=${query}`;
    const numberOfPosts = await fetchJson<string>(url);
    return numberOfPosts;
};
