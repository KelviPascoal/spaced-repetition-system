import styled, { css } from 'styled-components';
import React from 'react';

export type TextSize = 'small' | 'medium' | 'large';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  size?: TextSize;
}

const sizeStyles = {
  small: css`
    font-size: ${({ theme }) => theme.font.sizes.xsmall};
  `,
  medium: css`
    font-size: ${({ theme }) => theme.font.sizes.small};
  `,
  large: css`
    font-size: ${({ theme }) => theme.font.sizes.large};
  `,
};

export const Text = styled.span<TextProps>`
  ${({ size = 'medium' }) => css`

    ${size && sizeStyles[size]}
  `}
`;
