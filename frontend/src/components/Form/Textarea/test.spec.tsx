// components/Textarea/Textarea.test.tsx
import React from 'react'
import { render } from '../../../utils/test-utils'
import { Textarea } from './'

describe('<Textarea />', () => {
  it('should render the textarea element', () => {
    const { getByRole } = render(<Textarea aria-label="mensagem" />)
    expect(getByRole('textbox')).toBeInTheDocument()
  })

  it('should display the label when provided', () => {
    const { getByText } = render(<Textarea label="Mensagem" />)
    expect(getByText('Mensagem')).toBeInTheDocument()
  })

  it('should display the error message when provided', () => {
    const { getByText } = render(
      <Textarea errorMessage="Campo obrigatório" />
    )

    expect(getByText('Campo obrigatório')).toBeInTheDocument()
  })

  it('should accept and show default value', () => {
    const { getByDisplayValue } = render(
      <Textarea defaultValue="Texto pré-preenchido" />
    )

    expect(getByDisplayValue('Texto pré-preenchido')).toBeInTheDocument()
  })

  it('should accept native textarea props like placeholder', () => {
    const { getByPlaceholderText } = render(
      <Textarea placeholder="Digite sua mensagem" />
    )

    expect(getByPlaceholderText('Digite sua mensagem')).toBeInTheDocument()
  })
})
