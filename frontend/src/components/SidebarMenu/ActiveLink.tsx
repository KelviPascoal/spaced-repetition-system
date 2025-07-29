import { NavLink, NavLinkProps, useLocation } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { IconBox } from '../IconBox'
import { Text } from '../Text'
import React from 'react'
import { Box } from '../Box'

type ActiveLinkProps = NavLinkProps & {
    icon: React.ReactElement
    title: string
    description?: string
}

export const Link = styled(NavLink)`
${({ theme }) => css`
  padding: 0 1rem;

  position: relative;
  transition: all ${theme.transition.default} ease;
  cursor: pointer;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0.6rem;
    height: 0%;
    background-color: ${theme.colors.cards.primary};
    transition: height 0.3s ease;
    border-radius: ${theme.border.radius}
  }

  &:hover::after,
  &.active::after {
    height: 100%;
  }
`}

`

export function ActiveLink({ title, description, to, icon, ...props }: ActiveLinkProps) {
    const { pathname } = useLocation()

    const isActive = pathname === to

    return (
        <Link to={to} {...props}>
            <Box display="flex" gap="1rem" alignItems="center">
                <IconBox variant={isActive ? 'solid' : 'ghost'}>{icon}</IconBox>
                <Box display="flex" flexDirection="column">
                    <Text fontWeight="bold">{title}</Text>
                    <Text size='small' truncate maxWidth={'150px'}>{description}</Text>
                </Box>
            </Box>
        </Link>
    )
}
