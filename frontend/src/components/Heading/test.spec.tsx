import { Heading } from ".";
import { theme } from "../../styles/theme";
import { render } from "../../utils/test-utils";
import type { HeadingSize } from "./";

describe('Heading component', () => {
    it('renders with default props', () => {
        const { getByText } = render(<Heading>Default Heading</Heading>);
        const heading = getByText('Default Heading');

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveStyle(`margin: 0`);
        expect(heading).toHaveStyle(`line-height: 1.2`);
    });

    it('renders with custom as prop', () => {
        const { container } = render(<Heading as="h1">Custom Heading</Heading>);
        const heading = container.querySelector('h1');

        expect(heading).toBeInTheDocument();
        expect(heading?.textContent).toBe('Custom Heading');
    });

    it('renders children correctly', () => {
        const { getByText } = render(<Heading>Children Test</Heading>);

        expect(getByText('Children Test')).toBeInTheDocument();
    });

    it('passes extra props', () => {
        const { getByTestId } = render(
            <Heading data-testid="heading-test">Extra Props</Heading>
        );

        expect(getByTestId('heading-test')).toBeInTheDocument();
    });

    it('applies all sizes', () => {
        const sizes: HeadingSize[] = ['small', 'medium', 'large'];

        sizes.forEach(size => {
            const { getByText } = render(
                <Heading size={size}>Size {size}</Heading>
            );
            const heading = getByText(`Size ${size}`);

            expect(heading).toBeInTheDocument();

            if (size === 'small') expect(heading).toHaveStyle(`font-size: ${theme.font.sizes.xsmall}`);
            if (size === 'medium') expect(heading).toHaveStyle(`font-size: ${theme.font.sizes.small}`);
            if (size === 'large') expect(heading).toHaveStyle(`font-size: ${theme.font.sizes.xxlarge}`);
        });
    });
});
