import { StoryFn, Meta } from '@storybook/react';
import { PostCard, PostCardProps } from '.';

export default {
    title: 'PostCard',
    component: PostCard,
    arg: {
        slug: 'default-slug',
        title: 'default-title',
        cover: '/images/windows10.jpg',
    },
} as Meta;

export const PrimaryCover: StoryFn<PostCardProps> = (args) => (
    <div style={{ maxWidth: '36rem' }}>
        <PostCard {...args} />
    </div>
);

export const SecondaryCover: StoryFn<PostCardProps> = (args) => (
    <div style={{ maxWidth: '36rem' }}>
        <PostCard {...args} />
    </div>
);

SecondaryCover.args = {
    cover: '/images/linux.jpg',
    slug: 'default-slug',
    title: 'default-title',
};
PrimaryCover.args = {
    cover: '/images/windows10.jpg',
    slug: 'default-slug',
    title: 'default-title',
};
