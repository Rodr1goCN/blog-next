import { POSTS_URL2 } from '@/src/config/app-config';
import { PostData } from '@/src/domain/posts/post';
import { fetchJson } from '@/src/utils/fetch-json';
/* import { markDownToHtml } from '@/src/utils/markdown-to-html'; */

export const getPost = async (
    slug: string | string[] | undefined,
): Promise<PostData[]> => {
    const slugString = Array.isArray(slug) ? slug[0] : slug;
    const url = `${POSTS_URL2}?filters[slug][$eq]=${slugString}&fields=slug`;
    const jsonPosts = await fetchJson<PostData[]>(url);
    /*     const content = await markDownToHtml(jsonPosts[0].content);
    const finalContent = { ...jsonPosts[0], content }; */
    return jsonPosts;
};
