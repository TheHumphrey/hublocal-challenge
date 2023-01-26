import { useState } from "react"
import { useContextSelector } from "use-context-selector"
import { LoginContext } from "../../contexts/LoginContext"
import {
  InputAndLabelContainer,
  InputLabel,
  InputBase
} from "../BaseInput/BaseInput"
import {
  Form,
  SignInButton,
  SignInInputContainer,
  SignUpButton
} from "./style"

interface SignUpFormProps {
  changeToSignUpForm: () => void
}

export const SignUpForm = ({ changeToSignUpForm }: SignUpFormProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const { isFetching, singUp } = useContextSelector(LoginContext, (context) => {
    return {
      singUp: context.singUp,
      isFetching: context.isFetching
    }
  })

  async function handleSingUp(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      if (!email || !password || !name || !repeatPassword) return
      if (password !== repeatPassword) return
      await singUp(name, email, password)

      changeToSignUpForm()
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <Form onSubmit={handleSingUp}>
      <SignInInputContainer>
        <InputAndLabelContainer>
          <InputLabel htmlFor='name'>Nome</InputLabel>
          <InputBase id="name" customSize="medium" />
        </InputAndLabelContainer>

        <InputAndLabelContainer>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <InputBase id="email" customSize="medium" />
        </InputAndLabelContainer>

        <InputAndLabelContainer>
          <InputLabel htmlFor='password' >Senha</InputLabel>
          <InputBase id="password" type="password" customSize="medium" />
        </InputAndLabelContainer>

        <InputAndLabelContainer>
          <InputLabel htmlFor='repeat-password' >Repetir Senha</InputLabel>
          <InputBase id="repeat-password" type="password" customSize="medium" />
        </InputAndLabelContainer>
      </SignInInputContainer>

      <SignUpButton type="submit" disabled={isFetching}>REGISTRAR</SignUpButton>

      <SignInButton onClick={changeToSignUpForm}>LOGAR</SignInButton>
    </Form>
  )
}