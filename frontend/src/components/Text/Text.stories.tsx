import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        as: {
            control: false,
        },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Medium: Story = {
    args: {
        children: 'Texto de exemplo',
        size: 'medium',
    },
};

export const Large: Story = {
    args: {
        children: 'Texto em destaque',
        size: 'large',
    },
};
