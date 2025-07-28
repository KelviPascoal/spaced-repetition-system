import styled, { css } from 'styled-components';

import React from 'react';

export type HeadingSize = 'small' | 'medium' | 'large';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  size?: HeadingSize;
}


const sizeStyles = {
  small: css`
        font-size: ${({ theme }) => theme.font.sizes.xsmall};
    `,
  medium: css`
        font-size: ${({ theme }) => theme.font.sizes.small};
    `,
  large: css`
        font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    `,
};

export const Heading = styled.h2<HeadingProps>`
    ${({ theme, size = 'medium', }) => css`
        margin: 0;
        font-family: ${theme.colors.text.primary};
        font-weight: ${theme.font.bold};
        line-height: 1.2;

        ${size !== null ? sizeStyles[size as HeadingSize] : sizeStyles.medium}
    `}
`;
