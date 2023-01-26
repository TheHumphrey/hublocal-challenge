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
      const response = await singUp(name, email, password)

      response && changeToSignUpForm()
    } catch (err) {
      console.warn(err)
    }
  }

  function onChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value)
  }

  function onChangeEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value)
  }

  function onChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }
  function onChangeRepeatPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setRepeatPassword(event.target.value)
  }

  return (
    <Form onSubmit={handleSingUp}>
      <SignInInputContainer>
        <InputAndLabelContainer>
          <InputLabel htmlFor='name'>Nome</InputLabel>
          <InputBase id="name" customSize="medium" onBlur={onChangeName} />
        </InputAndLabelContainer>

        <InputAndLabelContainer>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <InputBase id="email" customSize="medium" onBlur={onChangeEmail} />
        </InputAndLabelContainer>

        <InputAndLabelContainer>
          <InputLabel htmlFor='password' >Senha</InputLabel>
          <InputBase id="password" type="password" customSize="medium" onBlur={onChangePassword} />
        </InputAndLabelContainer>

        <InputAndLabelContainer>
          <InputLabel htmlFor='repeat-password' >Repetir Senha</InputLabel>
          <InputBase id="repeat-password" type="password" customSize="medium" onChange={onChangeRepeatPassword} />
        </InputAndLabelContainer>
      </SignInInputContainer>

      <SignUpButton type="submit" disabled={isFetching}>REGISTRAR</SignUpButton>

      <SignInButton onClick={changeToSignUpForm}>LOGAR</SignInButton>
    </Form>
  )
}