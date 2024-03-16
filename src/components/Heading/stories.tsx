import { StoryFn, Meta } from '@storybook/react';
import { Heading, HeadingProps } from '.';

export default {
    title: 'Heading',
    component: Heading,
    args: {
        children: 'Uma coisa qulaquer',
    },
} as Meta;

export const Template: StoryFn<HeadingProps> = (args) => (
    <div style={{ maxWidth: '36rem' }}>
        <Heading {...args} />
    </div>
);
