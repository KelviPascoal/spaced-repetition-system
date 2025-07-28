import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { ButtonProps } from '.'

export type WrapperProps = {
  hasIcon?: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth' | 'variant'>

const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
  `,
  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,
  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,
  fullWidth: () => css`
    width: 100%;
  `,
  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `,

  disabled: () => css`
    &:disabled {
      cursor: not-allowed;
      filter: saturate(30%);
    }
  `,
  // referencia button chakra ui peguei 4 das 6 variantes que eles tem
  variants: {
    solid: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.brand.primary};
    color: ${theme.colors.text.inverted};

    &:hover {
      color: ${darken(0.1, theme.colors.text.inverted)};
      background-color: ${darken(0.1, theme.colors.brand.primary)};
    }
    `,
    surface: (theme: DefaultTheme) => css`
      background-color: ${theme.colors.neutral.white};
      color: ${theme.colors.text.primary};

      &:hover {
        background-color: ${darken(0.05, theme.colors.neutral.white)};
      }
    `,

    outline: (theme: DefaultTheme) => css`
      background-color: transparent;
      color: ${theme.colors.brand.primary};
      border: 1px solid ${theme.colors.brand.primary};

      &:hover {
        background-color: ${darken(0.05, theme.colors.neutral.white)};

    }
  `,

    ghost: (theme: DefaultTheme) => css`
     background-color: transparent;
     color: ${theme.colors.text.primary};

    &:hover {
      background-color: ${darken(0.05, theme.colors.neutral.white)};
    }
  `,
  }
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon, variant, disabled }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-family: ${theme.font.family};
    border: 0;
    cursor: pointer;
    border-radius: ${theme.border.radius};
    padding: ${theme.spacings.xxsmall};
    text-decoration: none;

    ${!!size && wrapperModifiers[size](theme)};
    ${!!fullWidth && wrapperModifiers.fullWidth()};
    ${!!hasIcon && wrapperModifiers.withIcon(theme)};
    ${!!variant && wrapperModifiers.variants[variant](theme)};
    ${disabled && wrapperModifiers.disabled()};
  `}
`
