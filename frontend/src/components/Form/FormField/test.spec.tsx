import { render } from '../../../utils/test-utils'
import { FormField } from './'
import { FaUser } from 'react-icons/fa'

describe('<FormField />', () => {
  it('should render the children element', () => {
    const { getByTestId } = render(
      <FormField>
        <input data-testid="field" />
      </FormField>
    )

    expect(getByTestId('field')).toBeInTheDocument()
  })

  it('should render label when provided', () => {
    const { getByText } = render(
      <FormField label="Email">
        <input />
      </FormField>
    )

    expect(getByText('Email')).toBeInTheDocument()
  })

  it('should not render label when not provided', () => {
    const { queryByText } = render(
      <FormField>
        <input />
      </FormField>
    )

    expect(queryByText(/.+/)).not.toBeInTheDocument()
  })

  it('should render icon when provided', () => {
    const { container } = render(
      <FormField icon={<FaUser data-testid="icon" />}>
        <input />
      </FormField>
    )

    expect(container.querySelector('[data-testid="icon"]')).toBeInTheDocument()
  })

  it('should not render icon when not provided', () => {
    const { queryByTestId } = render(
      <FormField>
        <input />
      </FormField>
    )

    expect(queryByTestId('icon')).not.toBeInTheDocument()
  })

  it('should render error message when provided', () => {
    const { getByText } = render(
      <FormField errorMessage="Campo obrigatório">
        <input />
      </FormField>
    )

    expect(getByText('Campo obrigatório')).toBeInTheDocument()
  })

  it('should not render error message when not provided', () => {
    const { queryByText } = render(
      <FormField>
        <input />
      </FormField>
    )

    expect(queryByText(/Campo obrigatório/i)).not.toBeInTheDocument()
  })
})
