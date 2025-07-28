import { InputHTMLAttributes } from 'react'
import { FormField, FormFieldProps } from '../FormField'
import * as S from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & Omit<FormFieldProps, 'children'>;

export const Input = ({ errorMessage, icon, label, hasError, ...props }: InputProps) => (
    <FormField label={label} hasError={hasError} errorMessage={errorMessage} icon={icon}>
        <S.InputField {...props} />
    </FormField>
)
