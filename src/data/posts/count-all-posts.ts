import { POSTS_URL2 } from '@/src/config/app-config';

export const countAllPosts = async (): Promise<number> => {
    const url = `${POSTS_URL2}count`;
    const numberOfPosts = await fetch(url);
    const data = await numberOfPosts.json();

    if (data && data.meta && data.meta.pagination) {
        return data.meta.pagination.total;
    }
    return 0;
};
