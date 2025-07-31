
import { TiShoppingCart } from 'react-icons/ti'
import { Button } from '.'
import { render } from '../../utils/test-utils'
import { theme } from '../../styles/theme'

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container, getByRole } = render(<Button>Buy now</Button>)

    expect(getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    const { getByRole } = render(<Button size="small">Buy now</Button>)

    expect(getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    const { getByRole } = render(<Button size="large">Buy now</Button>)

    expect(getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '5rem',
      'font-size': '1.6rem',
      padding: '0.8rem 4.8rem'
    })
  })

  it('should render a fullWidth version', () => {
    const { getByRole } = render(<Button fullWidth>Buy now</Button>)

    expect(getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    const { getByText, getByTestId } = render(
      <Button icon={<TiShoppingCart data-testid="icon" />}>Buy now</Button>
    )

    expect(getByText(/buy now/i)).toBeInTheDocument()
    expect(getByTestId('icon')).toBeInTheDocument()
  })

  it('should render Button as a link', () => {
    const { getByRole } = render(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })

  it('should render solid variant with background and color styles', () => {
    const { getByRole } = render(<Button variant="solid">Solid</Button>)
    const button = getByRole('button', { name: /solid/i })

    expect(button).toHaveStyle(`background: ${theme.colors.brand.primary}`)
    expect(button).toHaveStyle(`color: ${theme.colors.text.inverted}`)
  })

  it('should render surface variant with background and color styles', () => {
    const { getByRole } = render(<Button variant="surface">Surface</Button>)
    const button = getByRole('button', { name: /surface/i })

    expect(button).toHaveStyle(`background: ${theme.colors.neutral.white}`)
    expect(button).toHaveStyle(`color: ${theme.colors.text.primary}`)
  })

  it('should render outline variant with transparent background', () => {
    const { getByRole } = render(<Button variant="outline">Outline</Button>)
    const button = getByRole('button', { name: /outline/i })

    expect(button).toHaveStyle(`background: transparent`)
    expect(button).toHaveStyle(`color: ${theme.colors.brand.primary}`)
  })

  it('should render ghost variant with transparent background', () => {
    const { getByRole } = render(<Button variant="ghost">Ghost</Button>)
    const button = getByRole('button', { name: /ghost/i })

    expect(button).toHaveStyle(`background: transparent`)
    expect(button).toHaveStyle(`color: ${theme.colors.text.primary}`)
  })
})
