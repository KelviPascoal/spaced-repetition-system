// src/components/IconBox/styles.ts
import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

type ColorPalette =
  'primary' |
  'secondary' |
  'blue' |
  'green' |
  'yellow' |
  'red' |
  'purple' |
  'lightBlue' |
  'orange' |
  'lightGreen'


export type IconBoxProps = {
  size?: 'small' | 'medium' | 'large'
  variant?: 'solid' | 'surface' | 'outline' | 'ghost'
  colorPalette?: ColorPalette
  disabled?: boolean
  clickable?: boolean
}



const iconBoxModifiers = {
  small: (theme: DefaultTheme) => css`
    width: 3rem;
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    width: 4rem;
    height: 4rem;
    font-size: ${theme.font.sizes.small};
  `,
  large: (theme: DefaultTheme) => css`
    width: 5rem;
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
  `,

  variants: {
    solid: (theme: DefaultTheme, colorPalette: ColorPalette) => css`
      background-color: ${theme.colors.cards[colorPalette]};
      color: ${theme.colors.text.inverted};

      &:hover {
        background-color: ${darken(0.1, theme.colors.cards[colorPalette])};
        color: ${darken(0.1, theme.colors.text.inverted)};
      }
    `,
    surface: (theme: DefaultTheme, colorPalette: ColorPalette) => css`
      background-color: ${theme.colors.neutral.white};
      color: ${theme.colors.text.primary};

      &:hover {
        background-color: ${darken(0.05, theme.colors.neutral.white)};
      }
    `,
    outline: (theme: DefaultTheme, colorPalette: ColorPalette) => css`
      background-color: transparent;
      color: ${theme.colors.cards[colorPalette]};
      border: 1px solid ${theme.colors.cards[colorPalette]};

      &:hover {
        background-color: ${darken(0.05, theme.colors.neutral.white)};
      }
    `,
    ghost: (theme: DefaultTheme, colorPalette: ColorPalette) => css`
      background-color: transparent;
      color: ${theme.colors.text.primary};

      &:hover {
        background-color: ${darken(0.05, theme.colors.neutral.white)};
      }
    `
  },

  disabled: () => css`
    pointer-events: none;
    opacity: 0.6;
  `
}

export const IconBox = styled.div<IconBoxProps>`
  ${({ theme, size = 'medium', variant = 'solid', colorPalette = 'primary', disabled, clickable }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: ${theme.border.radius};
    cursor: ${clickable ? 'pointer' : 'default'};
    transition: background-color 0.2s ease;

    ${iconBoxModifiers[size](theme)};
    ${iconBoxModifiers.variants[variant](theme, colorPalette)};
    ${disabled && iconBoxModifiers.disabled()};
  `}
`
