import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Card } from './';
import { Box } from '../Box';
import { Heading } from '../Heading'; // Se tiver componente Heading, fica melhor!
import { Button } from '../Button';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Box marginBottom={3}>
                    <Heading size="medium">
                        Título do Card
                    </Heading>
                </Box>
                <Box color="#555">
                    Conteúdo do card com texto explicativo. Aqui você pode colocar qualquer coisa que desejar,
                    como descrições, listas ou elementos interativos.
                </Box>
            </>
        ),
    },
};

export const WithAction: Story = {
    args: {
        children: (
            <>
                <Box marginBottom={3}>
                    <Heading size="medium">
                        Novidades da Semana
                    </Heading>
                </Box>
                <Box >
                    Confira as últimas atualizações e ofertas exclusivas. Aproveite para ficar por dentro das novidades que preparamos para você!
                </Box>
                <Button>
                    Saiba Mais
                </Button>
            </>
        ),
    },
}
