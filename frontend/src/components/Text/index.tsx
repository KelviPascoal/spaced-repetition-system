import styled, { css } from 'styled-components';
import React from 'react';

export type TextSize = 'small' | 'medium' | 'large';
export type TextWeight = 'light' | 'regular' | 'medium' | 'bold'

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  size?: TextSize;
  truncate?: boolean;
  maxW?: string;
  fontWeight?: TextWeight
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

const weightStyles = {
  light: css`
    font-weight: 300;
  `,
  regular: css`
    font-weight: 400;
  `,
  medium: css`
    font-weight: 500;
  `,
  bold: css`
    font-weight: 700;
  `,
}


export const Text = styled.span<TextProps>`
  ${({ size = 'medium', fontWeight, truncate, maxW }) => css`
    ${size && sizeStyles[size]}
    ${fontWeight && weightStyles[fontWeight]}

    ${truncate &&
    css`
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      display: inline-block;
      max-width: ${maxW || '100%'};
    `}
  `}
`
