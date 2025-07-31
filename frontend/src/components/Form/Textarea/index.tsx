import { TextareaHTMLAttributes } from 'react'
import * as S from './styles'
import { FormField, FormFieldProps } from '../FormField'

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & Omit<FormFieldProps, 'children' | 'icon'>;

export const Textarea = ({ label, errorMessage, hasError, ...props }: TextareaProps) => {
  return (
    <FormField label={label} hasError={hasError} errorMessage={errorMessage}>
      <S.TextareaField {...props} />
    </FormField>
  )
}
