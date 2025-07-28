// Heading.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Heading } from './';

const meta: Meta<typeof Heading> = {
    title: 'Components/Heading',
    component: Heading,
    argTypes: {
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
        },
        as: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Large: Story = {
    args: {
        children: 'Título Padrão',
        size: 'large',
        as: 'h1',
    },
    render: (args) => <Heading {...args}>{args.children}</Heading>,
};
export const Medium: Story = {
    args: {
        children: 'Título em Destaque',
        size: 'medium',
        as: 'h3',
    },
    render: (args) => <Heading {...args}>{args.children}</Heading>,
};
