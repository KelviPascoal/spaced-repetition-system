// IconBox.test.tsx
import { theme } from 'src/styles/theme'
import { render } from '../../utils/test-utils'
import { ColorPalette, IconButton } from './'
import { parseToRgb } from 'polished'

const hexToRgbString = (hex: string) => {
  const { red, green, blue } = parseToRgb(hex)
  return `rgb(${red}, ${green}, ${blue})`
}

const colorVariants: ColorPalette[] = [
  'primary',
  'secondary',
  'blue',
  'green',
  'yellow',
  'red',
  'purple',
  'lightBlue',
  'orange',
  'lightGreen'
]

describe('<IconBox />', () => {
  it('should apply medium size by default', () => {
    const { getByTestId } = render(
      <IconButton data-testid="icon-box">Icon</IconButton>
    )
    const iconButton = getByTestId('icon-box')
    const styles = getComputedStyle(iconButton)

    expect(styles.width).toBe('4rem')
    expect(styles.height).toBe('4rem')
  })

  it('should apply small size', () => {
    const { getByTestId } = render(
      <IconButton size="small" data-testid="icon-box">Icon</IconButton>
    )
    const iconButton = getByTestId('icon-box')
    const styles = getComputedStyle(iconButton)

    expect(styles.width).toBe('3rem')
    expect(styles.height).toBe('3rem')
  })

  it('should apply large size', () => {
    const { getByTestId } = render(
      <IconButton size="large" data-testid="icon-box">Icon</IconButton>
    )
    const iconButton = getByTestId('icon-box')
    const styles = getComputedStyle(iconButton)

    expect(styles.width).toBe('5rem')
    expect(styles.height).toBe('5rem')
  })


  colorVariants.forEach((color) => {
    it(`should apply "${color}" color in solid variant`, () => {
      const { getByTestId } = render(
        <IconButton
          data-testid={`icon-box-${color}`}
          colorPalette={color}
          variant="solid"
        >
          Icon
        </IconButton>
      )

      const button = getByTestId(`icon-box-${color}`)

      const expectedColor = hexToRgbString(theme.colors.palettes[color])
      const actualBackgroundColor = getComputedStyle(button).backgroundColor

      expect(actualBackgroundColor).toBe(expectedColor)
    })
  })


  it('should have cursor pointer when clickable', () => {
    const { getByTestId } = render(
      <IconButton clickable data-testid="icon-box">Icon</IconButton>
    )
    const iconButton = getByTestId('icon-box')
    const styles = getComputedStyle(iconButton)

    expect(styles.cursor).toBe('pointer')
  })

  it('should have opacity and pointer-events when disabled', () => {
    const { getByTestId } = render(
      <IconButton disabled data-testid="icon-box">Icon</IconButton>
    )
    const iconButton = getByTestId('icon-box')
    const styles = getComputedStyle(iconButton)

    expect(styles.opacity).toBe('0.6')
    expect(styles.pointerEvents).toBe('none')
  })
})
