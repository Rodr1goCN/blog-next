import { POSTS_URL } from '@/src/config/app-config';
import { fetchJson } from '@/src/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
    const url = `${POSTS_URL}&${query}`;
    const numberOfPosts = await fetchJson<string>(url);
    return numberOfPosts;
};
