import { POSTS_URL2 } from '@/src/config/app-config';
import { fetchJson } from '@/src/utils/fetch-json';

export const countAllPosts = async (query = ''): Promise<string> => {
    const url = `${POSTS_URL2}&fields=id&$count=true&${query}`;
    const numberOfPosts = await fetchJson<string>(url);
    console.log(numberOfPosts);
    return numberOfPosts;
};

/* interface PostCount {
    count: number;
    data: Array<{ id: number }>;
}

// Usar o tipo PostCount para o retorno da função fetchJson
export const countAllPosts = async (query = ''): Promise<PostCount> => {
    // Escapar os caracteres especiais na query usando encodeURIComponent
    const url = `${POSTS_URL2}?fields=id&$count=true${encodeURIComponent(query)}`;
    // Usar um bloco try-catch para lidar com possíveis erros
    try {
        // Usar a palavra-chave await para esperar a resposta da requisição
        const numberOfPosts = await fetchJson<PostCount>(url);
        // Verificar se o objeto JSON tem o campo count
        if ('count' in numberOfPosts) {
            // Retornar o objeto JSON
            return numberOfPosts;
        } else {
            // Lançar um erro se o campo count não existir
            throw new Error(
                'O campo count não foi encontrado na resposta da API',
            );
        }
    } catch (error) {
        // Exibir o erro na console e retornar um objeto vazio
        console.error(error);
        return { count: 0, data: [] };
    }
}; */
