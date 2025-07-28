// components/Textarea/Textarea.stories.tsx
import { StoryObj } from '@storybook/react/types-6-0'
import { Textarea, TextareaProps } from '.'

export default {
    title: 'Components/Textarea',
    component: Textarea,
    argTypes: {
        label: { control: 'text' },
        placeholder: { control: 'text' },
        error: { control: 'text' },
        icon: { control: false },
    },
}

export const Default = (args: StoryObj<TextareaProps>) => <Textarea {...args} />

Default.args = {
    placeholder: 'Digite sua mensagem',
}

export const WithLabel = (args: StoryObj<TextareaProps>) => <Textarea {...args} />

WithLabel.args = {
    label: 'Mensagem',
    placeholder: 'Digite sua mensagem',
}



export const WithError = (args: StoryObj<TextareaProps>) => <Textarea {...args} />

WithError.args = {
    label: 'Mensagem',
    placeholder: 'Digite sua mensagem',
    error: 'Mensagem obrigatória',
}
