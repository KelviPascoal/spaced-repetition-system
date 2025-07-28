import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Box } from './';

const meta: Meta<typeof Box> = {
    title: 'Components/Box',
    component: Box,
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        padding: { control: 'text' },
        borderRadius: { control: 'text' },
        gap: { control: 'text' },
        display: {
            control: 'select',
            options: ['block', 'inline-block', 'flex', 'grid', 'inline-flex', 'inline-grid'],
        },
        alignItems: {
            control: 'select',
            options: ['flex-start', 'center', 'flex-end', 'stretch', 'baseline'],
        },
        justifyContent: {
            control: 'select',
            options: ['flex-start', 'center', 'flex-end', 'space-between', 'space-around', 'space-evenly'],
        },
        flexDirection: {
            control: 'select',
            options: ['row', 'column', 'row-reverse', 'column-reverse'],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Box>;

// 📦 Box padrão para textos e seções básicas
export const Default: Story = {
    args: {
        backgroundColor: '#f0f0f0',
        color: '#333',
        padding: '20px',
        borderRadius: '10px',
        display: 'block',
    },
    render: (args) => <Box {...args}>This is a default Box component</Box>,
};

export const CenteredFlex: Story = {
    args: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px',
        backgroundColor: '#fafafa',
        borderRadius: '12px',
    },
    render: (args) => <Box {...args}>Content Centered</Box>,
};

export const FlexColumn: Story = {
    args: {
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        padding: '16px',
        backgroundColor: '#f0f4c3',
        borderRadius: '8px',
    },
    render: (args) => (
        <Box {...args}>
            <Box backgroundColor="#afb42b" color="#fff" padding="8px" borderRadius="4px">
                Item 1
            </Box>
            <Box backgroundColor="#c0ca33" color="#fff" padding="8px" borderRadius="4px">
                Item 2
            </Box>
            <Box backgroundColor="#dce775" color="#000" padding="8px" borderRadius="4px">
                Item 3
            </Box>
        </Box>
    ),
};

// 3. Centralização total
export const FlexCenter: Story = {
    args: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
        backgroundColor: '#bbdefb',
        borderRadius: '12px',
        height: '150px',
    },
    render: (args) => <Box {...args}>Conteúdo Centralizado</Box>,
};

// 4. Espaçamento space-between
export const FlexSpaceBetween: Story = {
    args: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '16px',
        backgroundColor: '#c8e6c9',
        borderRadius: '8px',
    },
    render: (args) => (
        <Box {...args}>
            <Box>Esquerda</Box>
            <Box>Centro</Box>
            <Box>Direita</Box>
        </Box>
    ),
};

// 5. Alinhamento itens ao final
export const FlexEnd: Story = {
    args: {
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '16px',
        backgroundColor: '#ffe0b2',
        borderRadius: '8px',
    },
    render: (args) => (
        <Box {...args}>
            <Box padding="8px" backgroundColor="#fb8c00" color="#fff" borderRadius="4px">
                Central Vertical 1
            </Box>
            <Box padding="8px" backgroundColor="#f57c00" color="#fff" borderRadius="4px">
                Central Vertical 2
            </Box>
            <Box padding="8px" backgroundColor="#ef6c00" color="#fff" borderRadius="4px">
                Central Vertical 3
            </Box>
        </Box>
    ),
};
