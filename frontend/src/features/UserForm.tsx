import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { Input } from "../components/Form/Input";
import { useFormContext } from "react-hook-form";
import React from "react";
import * as yup from 'yup'
import { InferType } from "yup";
import { Box } from "../components/Box";

export type UserProps = InferType<typeof userSchema>

export type UserFormProps = {
    initialValues?: UserProps
    isFormDisabled?: boolean
    isSignUpPage?: boolean
}

export const userSchema = yup.object({
    mode: yup.string().oneOf(['signIn', 'signUp']).required(),
    name: yup.string().when('mode', {
        is: 'signUp',
        then: (schema) => schema.required('Nome obrigatório'),
        otherwise: (schema) => schema.optional(),
    }),
    email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
    password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Senha obrigatória'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'As senhas não coincidem')
        .required('Confirme a senha'),
})


export function UserForm({ isFormDisabled, initialValues, isSignUpPage }: UserFormProps) {
    const { register, setValue, formState } = useFormContext<UserProps>()

    React.useEffect(() => {
        initialValues?.name && setValue('name', initialValues.name)
        initialValues?.email && setValue('email', initialValues.email)
        initialValues?.password && setValue('password', initialValues.password)
        isSignUpPage ? setValue('mode', 'signUp') : setValue('mode', 'signIn')
    }, [initialValues, setValue])

    const isDisabled = isFormDisabled || formState.isSubmitting;

    return (
        <Box display="flex" flexDirection="column" alignItems="center" maxWidth="600px" gap="2rem">
            {isSignUpPage && (
                <Input {...register("name")}
                    label="Nome"
                    icon={<FiUser />}
                    placeholder="Nome"
                    isDisabled={isDisabled}
                    errorMessage={formState.errors.name?.message}
                    hasError={!!formState.errors.name?.message}
                />
            )}
            <Input
                {...register("email")}
                label="E-mail"
                type="email"
                icon={<FiMail />}
                placeholder="E-mail"
                isDisabled={isDisabled}
                errorMessage={formState.errors.email?.message}
                hasError={!!formState.errors.email?.message}
            />
            <Input
                {...register("password")}
                label="Senha"
                icon={<FiLock />}
                type="password"
                placeholder="Senha"
                isDisabled={isDisabled}
                errorMessage={formState.errors.password?.message}
                hasError={!!formState.errors.password?.message}
            />
            {isSignUpPage && (
                <Input
                    {...register("confirmPassword")}
                    label="Confirme a senha"
                    icon={<FiLock />}
                    type="password"
                    placeholder="Senha"
                    isDisabled={isDisabled}
                    errorMessage={formState.errors.confirmPassword?.message}
                    hasError={!!formState.errors.confirmPassword?.message}
                />
            )}
        </Box>
    )
}