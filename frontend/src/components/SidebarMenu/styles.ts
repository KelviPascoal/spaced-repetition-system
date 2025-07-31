import { NavLink } from 'react-router-dom'
import styled, { css } from 'styled-components'

export const Aside = styled.aside`
  width: 240px;
  height: 100vh;
  background-color: #f9f9f9;
  border-right: 1px solid #eee;
  padding: 2rem 1rem;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const NavItem = styled.li``

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
    background-color: ${theme.colors.palettes.primary};
    transition: height 0.3s ease;
    border-radius: ${theme.border.radius}
  }

  &:hover::after,
  &.active::after {
    height: 100%;
  }
`}

`
