import { Container } from './styled';
import { DiscussionEmbed } from 'disqus-react';

export type CommentsProps = {
    slug: string;
    title: string;
};

export const Comments = ({ slug, title }: CommentsProps) => {
    return (
        <Container>
            <DiscussionEmbed
                shortname="meublog-20"
                config={{
                    url: `http://vcap.me:3000/post/${slug}`,
                    identifier: slug,
                    title: title,
                    language: 'pt_BR',
                }}
            />
        </Container>
    );
};
