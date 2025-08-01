import { InputHTMLAttributes } from 'react'
import { FormField, FormFieldProps } from '../FormField'
import * as S from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Omit<FormFieldProps, 'children'> & {
  isDisabled?: boolean
};

export const Input = ({ errorMessage, icon, label, hasError, isDisabled, ...props }: InputProps) => (
  <FormField label={label} hasError={hasError} errorMessage={errorMessage} icon={icon}>
    <S.InputField disabled={isDisabled} {...props} />
  </FormField>
)
