import { Text } from './';
import { render } from '../../utils/test-utils';
import { theme } from '../../styles/theme';

describe('Text component', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Text>Default Text</Text>);
        const text = getByText('Default Text');

        expect(text).toBeInTheDocument();
        expect(text.tagName.toLowerCase()).toBe('span');
    });

    it('renders with custom as prop', () => {
        const { container } = render(<Text as="span">Custom Text</Text>);
        const span = container.querySelector('span');

        expect(span).toBeInTheDocument();
        expect(span?.textContent).toBe('Custom Text');
    });

    it('renders children correctly', () => {
        const { getByText } = render(<Text>Children Test</Text>);

        expect(getByText('Children Test')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const { getByText } = render(<Text>Conteúdo</Text>);

        expect(getByText('Conteúdo')).toBeInTheDocument();
    });

    it('applies all sizes', () => {
        const sizes: ('small' | 'medium' | 'large')[] = ['small', 'medium', 'large'];

        sizes.forEach(size => {
            const { getByText } = render(<Text size={size}>Tamanho {size}</Text>);
            const text = getByText(`Tamanho ${size}`);

            if (size === 'small') expect(text).toHaveStyle(`font-size: ${theme.font.sizes.xsmall}`);
            if (size === 'medium') expect(text).toHaveStyle(`font-size: ${theme.font.sizes.small}`);
            if (size === 'large') expect(text).toHaveStyle(`font-size: ${theme.font.sizes.large}`);
        });
    });

    it('renders with custom as prop', () => {
        const { container } = render(<Text as="span">Span Text</Text>);
        const span = container.querySelector('span');

        expect(span).toBeInTheDocument();
        expect(span?.textContent).toBe('Span Text');
    });

    it('passes extra props', () => {
        const { getByTestId } = render(<Text data-testid="text-test">Extra Props</Text>);

        expect(getByTestId('text-test')).toBeInTheDocument();
    });
});
