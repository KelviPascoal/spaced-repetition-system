import { Box } from './';
import { render } from '../../utils/test-utils';
import { screen } from '@testing-library/react';

describe('Box component', () => {
    it('renders with default styles', () => {
        const { getByText } = render(<Box>Content</Box>);
        const box = getByText('Content');

        expect(box).toBeInTheDocument();
    });

    it('supports the "as" prop', () => {
        const { container } = render(<Box as="section">Section Element</Box>);
        const section = container.querySelector('section');

        expect(section).toBeInTheDocument();
        expect(section?.textContent).toBe('Section Element');
    });

    it('applies responsive margin using theme scale', () => {
        const { getByText } = render(<Box margin={2}>With Margin</Box>);
        const box = getByText('With Margin');

        expect(box).toHaveStyle('margin: 8px');
    });

    it('renders children', () => {
        render(<Box>content</Box>);
        expect(screen.getByText('content')).toBeInTheDocument();
    });

    it('applies padding and margin props', () => {
        render(
            <Box
                paddingTop={3}
                paddingX={1}
                margin={2}
                marginBottom={4}
                marginY={1}
                data-testid="box"
            />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('padding-top: 12px');
        expect(box).toHaveStyle('padding-left: 4px');
        expect(box).toHaveStyle('padding-right: 4px');
        expect(box).toHaveStyle('margin: 4px 8px 4px 8px');
    });

    it('applies width, height, min/max props', () => {
        render(
            <Box
                width={100}
                height="50%"
                minWidth={10}
                minHeight="20px"
                maxWidth={200}
                maxHeight="90vh"
                data-testid="box"
            />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('width: 100px');
        expect(box).toHaveStyle('height: 50%');
        expect(box).toHaveStyle('min-width: 10px');
        expect(box).toHaveStyle('min-height: 20px');
        expect(box).toHaveStyle('max-width: 200px');
        expect(box).toHaveStyle('max-height: 90vh');
    });

    it('applies display, gap, flexbox props', () => {
        render(
            <Box
                display="flex"
                gap={2}
                flexDirection="row"
                flexWrap="wrap"
                justifyContent="center"
                alignItems="flex-end"
                alignContent="stretch"
                flex="1"
                flexGrow={2}
                flexShrink={0}
                flexBasis="50%"
                alignSelf="center"
                order={3}
                data-testid="box"
            />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('display: flex');
        expect(box).toHaveStyle('gap: 8px');
        expect(box).toHaveStyle('flex-direction: row');
        expect(box).toHaveStyle('flex-wrap: wrap');
        expect(box).toHaveStyle('justify-content: center');
        expect(box).toHaveStyle('align-items: flex-end');
        expect(box).toHaveStyle('align-content: stretch');
        expect(box).toHaveStyle('flex: 1');
        expect(box).toHaveStyle('flex-grow: 2');
        expect(box).toHaveStyle('flex-shrink: 0');
        expect(box).toHaveStyle('flex-basis: 50%');
        expect(box).toHaveStyle('align-self: center');
        expect(box).toHaveStyle('order: 3');
    });

    it('applies visual props', () => {
        render(
            <Box
                backgroundColor="#fff"
                color="#333"
                border="1px solid #000"
                borderRadius={8}
                boxShadow="0 0 4px #000"
                transition="all 0.2s"
                cursor="pointer"
                textAlign="right"
                data-testid="box"
            />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('background-color: #fff');
        expect(box).toHaveStyle('color: #333');
        expect(box).toHaveStyle('border: 1px solid #000');
        expect(box).toHaveStyle('border-radius: 8px');
        expect(box).toHaveStyle('box-shadow: 0 0 4px #000');
        expect(box).toHaveStyle('transition: all 0.2s');
        expect(box).toHaveStyle('cursor: pointer');
        expect(box).toHaveStyle('text-align: right');
    });

    it('applies background prop', () => {
        render(<Box background="linear-gradient(#fff, #eee)" data-testid="box" />);
        expect(screen.getByTestId('box')).toHaveStyle('background: linear-gradient(#fff, #eee)');
    });

    it('applies borderStyle and borderWidth', () => {
        render(
            <Box borderStyle="dashed" borderWidth={2} data-testid="box" />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('border-style: dashed');
        expect(box).toHaveStyle('border-width: 2');
    });

    it('applies hover styles', () => {
        render(
            <Box hover={{ color: 'red', backgroundColor: 'yellow' }} data-testid="box" />
        );
        expect(screen.getByTestId('box')).toBeInTheDocument();
    });

    it('renders as another element', () => {
        render(<Box as="section" data-testid="box" />);
        expect(screen.getByTestId('box').tagName).toBe('SECTION');
    });

    it('applies responsive props', () => {
        render(
            <Box
                display={{ _: 'block', md: 'flex' }}
                flexDirection={{ _: 'column', lg: 'row' }}
                alignItems={{ _: 'center', sm: 'flex-start' }}
                data-testid="box"
            />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('display: block');
        expect(box).toHaveStyle('flex-direction: column');
        expect(box).toHaveStyle('align-items: center');
    });

    it('passes extra props', () => {
        render(<Box id="my-box" data-testid="box" />);
        expect(screen.getByTestId('box')).toHaveAttribute('id', 'my-box');
    });

    it('applies padding and margin with string values', () => {
        render(
            <Box padding="16px" margin="2em" data-testid="box" />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('padding: 16px');
        expect(box).toHaveStyle('margin: 2em');
    });

    it('applies borderRadius as string', () => {
        render(<Box borderRadius="50%" data-testid="box" />);
        expect(screen.getByTestId('box')).toHaveStyle('border-radius: 50%');
    });

    it('applies flexGrow and flexShrink as zero', () => {
        render(<Box flexGrow={0} flexShrink={0} data-testid="box" />);
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('flex-grow: 0');
        expect(box).toHaveStyle('flex-shrink: 0');
    });

    it('applies order as zero', () => {
        render(<Box order={0} data-testid="box" />);
        expect(screen.getByTestId('box')).toHaveStyle('order: 0');
    });

    it('applies box-sizing by default', () => {
        render(<Box data-testid="box" />);
        expect(screen.getByTestId('box')).toHaveStyle('box-sizing: border-box');
    });

    it('applies multiple spacing props together', () => {
        render(
            <Box
                padding={2}
                marginLeft={5}
                marginRight={6}
                data-testid="box"
            />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('padding: 8px');
        expect(box).toHaveStyle('margin-left: 20px');
        expect(box).toHaveStyle('margin-right: 24px');
    });

    it('applies alignContent and alignSelf', () => {
        render(
            <Box alignContent="center" alignSelf="flex-end" data-testid="box" />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('align-content: center');
        expect(box).toHaveStyle('align-self: flex-end');
    });

    it('applies only hover color', () => {
        render(<Box hover={{ color: 'blue' }} data-testid="box" />);
        expect(screen.getByTestId('box')).toBeInTheDocument();
    });

    it('renders with custom transition', () => {
        render(<Box transition="opacity 0.5s" data-testid="box" />);
        expect(screen.getByTestId('box')).toHaveStyle('transition: opacity 0.5s');
    });

    it('renders with custom boxShadow', () => {
        render(<Box boxShadow="2px 2px 2px #aaa" data-testid="box" />);
        expect(screen.getByTestId('box')).toHaveStyle('box-shadow: 2px 2px 2px #aaa');
    });

    it('renders with custom cursor', () => {
        render(<Box cursor="grab" data-testid="box" />);
        expect(screen.getByTestId('box')).toHaveStyle('cursor: grab');
    });

    it('renders with custom textAlign', () => {
        render(<Box textAlign="center" data-testid="box" />);
        expect(screen.getByTestId('box')).toHaveStyle('text-align: center');
    });

    it('applies display flex and flex properties', () => {
        render(
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                alignItems="center"
                gap={3}
                data-testid="box"
            />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('display: flex');
        expect(box).toHaveStyle('flex-direction: column');
        expect(box).toHaveStyle('justify-content: space-between');
        expect(box).toHaveStyle('align-items: center');
        expect(box).toHaveStyle('gap: 12px');
    });

    it('applies responsive display and flexDirection using object', () => {
        render(
            <Box
                display={{ _: 'block', md: 'flex', lg: 'grid' }}
                flexDirection={{ _: 'row', md: 'column' }}
                data-testid="box"
            />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('display: block');
        expect(box).toHaveStyle('flex-direction: row');
    });

    it('applies responsive display using array', () => {
        render(
            <Box
                display={['block', 'flex', 'grid']}
                data-testid="box"
            />
        );
        const box = screen.getByTestId('box');

        expect(box).toHaveStyle('display: block');
    });

});
