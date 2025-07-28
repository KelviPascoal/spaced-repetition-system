import React, { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
    | AnchorHTMLAttributes<HTMLAnchorElement>
    | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
    size?: 'small' | 'medium' | 'large'
    fullWidth?: boolean
    variant?: 'solid' | 'surface' | 'outline' | 'ghost'
    icon?: React.ReactElement
    as?: React.ElementType
} & ButtonTypes

export const Button = (
    {
        children,
        icon,
        size = 'medium',
        fullWidth = false,
        variant = 'solid',
        ...props
    }: S.WrapperProps & ButtonProps
) => (
    <S.Wrapper
        size={size}
        fullWidth={fullWidth}
        variant={variant}
        hasIcon={!!icon}
        {...props}
    >
        {icon}
        {!!children && <span>{children}</span>}
    </S.Wrapper>
)
