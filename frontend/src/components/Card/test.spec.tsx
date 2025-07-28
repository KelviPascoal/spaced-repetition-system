import { theme } from '../../styles/theme';
import { Card } from './';
import { screen } from '@testing-library/react';
import { render } from '../../utils/test-utils';

describe('<Card />', () => {
    it('deve renderizar o conteúdo corretamente', () => {
        render(<Card>Conteúdo do Card</Card>);
        expect(screen.getByText('Conteúdo do Card')).toBeInTheDocument();
    });

    it('deve aplicar os estilos do tema corretamente', () => {
        render(<Card>Estilizado</Card>);
        const element = screen.getByText('Estilizado');

        expect(element).toHaveStyle(`background-color: ${theme.colors.background.base}`);
        expect(element).toHaveStyle(`border-radius: ${theme.border.radius}`);
        expect(element).toHaveStyle(`padding: ${theme.spacings.small}`);
        expect(element).toHaveStyle(`transition: box-shadow ${theme.transition.default}`);
    });

    it('deve aceitar props adicionais', () => {
        render(<Card data-testid="card-test">Teste</Card>);
        expect(screen.getByTestId('card-test')).toBeInTheDocument();
    });
});
