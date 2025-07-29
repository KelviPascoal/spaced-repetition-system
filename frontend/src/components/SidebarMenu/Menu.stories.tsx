// SidebarMenu.stories.tsx
import type { Meta } from '@storybook/react-webpack5';
import { SidebarMenu } from './'
import { MemoryRouter } from 'react-router-dom'

export default {
    title: 'Components/SidebarMenu',
    component: SidebarMenu,
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/']}>
                <Story />
            </MemoryRouter>
        ),
    ],
} satisfies Meta<typeof SidebarMenu>

export const Default = {}
