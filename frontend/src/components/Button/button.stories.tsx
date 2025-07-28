import { StoryObj } from '@storybook/react/types-6-0';
import { Button, ButtonProps } from '.';
import { TiShoppingCart } from 'react-icons/ti';

export default {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        children: {
            control: 'text',
        },
        size: {
            control: {
                type: 'select',
                options: ['small', 'medium', 'large'],
            },
        },
        variant: {
            control: {
                type: 'select',
                options: ['solid', 'surface', 'outline', 'ghost'],
            },
        },
        icon: {
            control: false,
        },
        as: {
            control: false,
        }
    },
};

export const Default = (args: StoryObj<ButtonProps>) => <Button {...args} />;

Default.args = {
    children: 'Buy now',
    variant: 'outline'
};

export const withIcon = (args: StoryObj<ButtonProps>) => <Button {...args} />;

withIcon.args = {
    size: 'small',
    children: 'Buy now',
    icon: <TiShoppingCart />,
};

export const asLink = (args: StoryObj<ButtonProps>) => <Button {...args} />;

asLink.args = {
    size: 'large',
    children: 'Buy now',
    as: 'a',
    href: '/link',
};
