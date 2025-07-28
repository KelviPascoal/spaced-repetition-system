// components/Textarea/Textarea.styles.ts
import styled, { css } from 'styled-components'

export const TextareaField = styled.textarea`
${({ theme }) => css`
  flex: 1;
  background: transparent;
  border: none;
  font-size: ${theme.font.sizes.small};
    color: ${theme.colors.text.primary};

  resize: none;
  min-height: 100px;

  &::placeholder {
    color: ${theme.colors.text.secondary};
  }

  &:focus {
    outline: none;
  }
  `}
`
