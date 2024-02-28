import { POSTS_URL } from '@/src/config/app-config';
import { fetchJson } from '@/src/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
    const url = `${POSTS_URL}/count?${query}`;
    const numberOfPosts = await fetchJson<string>(url);
    return numberOfPosts;
};

/* const url = `${POSTS_URL}?fields=id&$count=true&${query}`; */
