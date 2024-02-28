import { Footer } from '@/src/components/Footer';
import { Header } from '@/src/components/Header';
import { MainContainer } from '@/src/components/MainContainer';
import { PostData } from '@/src/domain/posts/post';
import Markdown from 'react-markdown';

export type PostProps = {
    post: PostData;
};

export const Post = ({ post }: PostProps) => {
    return (
        <>
            <Header />

            <MainContainer>
                <h2>{post.title}</h2>
                <div>
                    <Markdown>{post.content}</Markdown>
                </div>
            </MainContainer>

            <Footer />
        </>
    );
};
