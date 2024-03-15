/* eslint-disable */
import { StoryFn, Meta } from '@storybook/react';
import { PostCard, PostCardProps } from '.';

export default {
    title: 'PostCard',
    component: PostCard,
} as Meta;

export const StoryButton: StoryFn<PostCardProps> = (args) => (
    <PostCard {...args} />
);
