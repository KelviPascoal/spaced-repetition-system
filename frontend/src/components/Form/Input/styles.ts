import styled, { css } from 'styled-components'

export const InputField = styled.input`
${({ theme }) => css`
  flex: 1;
  background: transparent;
  border: none;
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.text.primary};

  &::placeholder {
    color: ${theme.colors.text.secondary};
  }
  
  &:focus {
    outline: none;
  }
  `}
`
