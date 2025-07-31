// components/Input/Input.test.tsx
import { Input } from './'
import { FaUser } from 'react-icons/fa'
import { render } from '../../../utils/test-utils'

describe('<Input />', () => {
  it('should render the input element', () => {
    const { getByRole } = render(<Input aria-label="email" />)
    expect(getByRole('textbox')).toBeInTheDocument()
  })

  it('should accept and display label', () => {
    const { getByText } = render(<Input label="E-mail" />)
    expect(getByText('E-mail')).toBeInTheDocument()
  })

  it('should accept and display icon', () => {
    const { getByTestId } = render(
      <Input icon={<FaUser data-testid="icon" />} />
    )

    expect(getByTestId('icon')).toBeInTheDocument()
  })

  it('should display error message when provided', () => {
    const { getByText } = render(
      <Input errorMessage="Campo obrigatório" />
    )

    expect(getByText('Campo obrigatório')).toBeInTheDocument()
  })

  it('should set input value correctly', () => {
    const { getByDisplayValue } = render(
      <Input defaultValue="John Doe" />
    )

    expect(getByDisplayValue('John Doe')).toBeInTheDocument()
  })

  it('should propagate HTML input props', () => {
    const { getByPlaceholderText } = render(
      <Input placeholder="Digite seu nome" />
    )

    expect(getByPlaceholderText('Digite seu nome')).toBeInTheDocument()
  })
})
