import { IconButton, IconButtonProps } from '.'
import { StoryObj, Meta } from '@storybook/react-webpack5'
import { MdFavorite } from 'react-icons/md'

export default {
    title: 'Components/IconButton',
    component: IconButton,
    args: {
        size: 'medium',
        variant: 'solid',
        colorPalette: 'primary',
        disabled: false,
        clickable: true
    },
    argTypes: {
        size: {
            control: 'inline-radio',
            options: ['small', 'medium', 'large']
        },
        variant: {
            control: 'select',
            options: ['solid', 'surface', 'outline', 'ghost']
        },
        colorPalette: {
            control: 'select',
            options: [
                'primary', 'secondary', 'blue', 'green', 'yellow',
                'red', 'purple', 'lightBlue', 'orange', 'lightGreen'
            ]
        },
        disabled: {
            control: 'boolean'
        },
        clickable: {
            control: 'boolean'
        },
    }
} satisfies Meta<IconButtonProps>


export const Variants: StoryObj<IconButtonProps> = {
    render: (args) => (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            {['solid', 'surface', 'outline', 'ghost'].map((variant) => (
                <IconButton key={variant} {...args} variant={variant as IconButtonProps['variant']}>
                    <MdFavorite size={24} />
                </IconButton>
            ))}
        </div>
    )
}

export const Sizes: StoryObj<IconButtonProps> = {
    render: (args) => (
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            {['small', 'medium', 'large'].map((size) => (
                <IconButton key={size} {...args} size={size as IconButtonProps['size']}>
                    <MdFavorite size={24} />
                </IconButton>
            ))}
        </div>
    )
}