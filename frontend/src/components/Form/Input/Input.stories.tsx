// components/Input/Input.stories.tsx
import { StoryObj } from '@storybook/react/types-6-0'
import { Input, type InputProps } from './'
import { FiMail } from 'react-icons/fi'

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
        label: {
            control: 'text'
        },
        placeholder: {
            control: 'text'
        },
        error: {
            control: 'text'
        }
    }
}

export const Default = (args: StoryObj<InputProps>) => <Input {...args} />

Default.args = {
    placeholder: 'Digite seu nome'
}

export const WithLabel = (args: StoryObj<InputProps>) => <Input {...args} />

WithLabel.args = {
    label: 'Nome',
    placeholder: 'Digite seu nome'
}

export const WithIcon = (args: StoryObj<InputProps>) => <Input {...args} />

WithIcon.args = {
    label: 'Email',
    placeholder: 'Digite seu email',
    icon: <FiMail />
}

export const WithError = (args: StoryObj<InputProps>) => <Input {...args} />

WithError.args = {
    label: 'Email',
    placeholder: 'Digite seu email',
    icon: <FiMail />,
    error: 'Email inválido'
}
