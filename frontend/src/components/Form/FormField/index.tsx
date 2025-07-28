// components/FormField/FormField.tsx
import { ReactNode } from 'react'
import * as S from './styles'

export type FormFieldProps = {
    label?: string
    icon?: ReactNode
    hasError?: boolean
    errorMessage?: string
    children: ReactNode
}

export const FormField = ({ label, icon, errorMessage, children, hasError }: FormFieldProps) => {
    return (
        <S.Container>
            {label && <S.Label>{label}</S.Label>}

            <S.InputWrapper hasIcon={!!icon} hasError={!!hasError}>
                {icon && <S.Icon>{icon}</S.Icon>}
                {children}
            </S.InputWrapper>

            {errorMessage && <S.HelperText>{errorMessage}</S.HelperText>}
        </S.Container>
    )
}
