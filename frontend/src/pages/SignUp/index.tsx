import { FormProvider, useForm } from "react-hook-form"
import { Button } from "../../components/Button"
import { UserForm, userSchema } from "../../features/UserForm"
import { yupResolver } from '@hookform/resolvers/yup'
import { Box } from "../../components/Box"

export const SignUp = () => {
    const methods = useForm({ resolver: yupResolver(userSchema) })

    return (
        <Box display="flex" flexDirection="column" alignItems="center" gap="3rem">
            <h1>Cadastro</h1>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => console.log(data))}>
                    <UserForm isSignUpPage />
                    <Box marginTop="1.5rem">
                        <Button type="submit">Salvar</Button>
                    </Box>
                </form>
            </FormProvider>
        </Box >
    )
}