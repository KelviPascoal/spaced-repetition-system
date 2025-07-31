import { useLocation } from 'react-router-dom'
import { IconButton } from '../IconButton'
import { Text } from '../Text'
import React from 'react'
import { Box } from '../Box'
import { Link } from './styles'

type ActiveLinkProps = {
  icon: React.ReactElement
  title: string
  description?: string
  to: string | {
    pathname: string,
    search: string,
    hash: string,
  }
}

export function ActiveLink({ title, description, to, icon, ...props }: ActiveLinkProps) {
  const { pathname } = useLocation()

  const isActive = pathname === to

  return (
    <Link to={to} {...props}>
      <Box display="flex" gap="1rem" alignItems="center">
        <IconButton variant={isActive ? 'solid' : 'ghost'}>{icon}</IconButton>
        <Box display="flex" flexDirection="column">
          <Text fontWeight="bold">{title}</Text>
          <Text size='small' truncate maxW={'150px'}>{description}</Text>
        </Box>
      </Box>
    </Link>
  )
}
