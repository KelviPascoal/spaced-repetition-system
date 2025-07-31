import styled, { css } from 'styled-components'

type WrapperProps = {
  hasIcon: boolean
  hasError: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const Label = styled.label`
${({ theme }) => css`
  margin-bottom: 0.4rem;
  font-size: ${theme.font.sizes.small};
  `}
`

export const InputWrapper = styled.div<WrapperProps>`
${({ theme, hasError, hasIcon, }) => css`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.neutral.white};
  border-radius: 0.4rem;
  border: 1px solid ${({ theme }) => theme.colors.neutral.white};
  transition: border 0.2s ease;

  ${hasIcon && css`
      gap: 0.8rem;
    `}

  ${hasError && css`
      border-color: ${theme.colors.feedback.danger};
    `}
    `}
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HelperText = styled.span`
${({ theme }) => css`
  color: ${theme.colors.feedback.danger};
  font-size: ${theme.font.sizes.small};
  margin-top: 0.25rem;
  `}
`
