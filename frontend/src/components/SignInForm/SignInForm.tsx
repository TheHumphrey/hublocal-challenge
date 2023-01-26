import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
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

interface SignInFormProps {
  changeToSignUpForm: () => void
}

export const SignInForm = ({ changeToSignUpForm }: SignInFormProps) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isFetching, setIsFetching] = useState(false)

  const navigate = useNavigate()

  const { isAuth, singIn } = useContextSelector(LoginContext, (context) => {
    return {
      singIn: context.singIn,
      isAuth: context.isAuth
    }
  })

  useEffect(() => {
    isAuth && navigate('/companies')
  }, [isAuth])

  async function LoginIn(event: React.FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault()
      if (!email || !password) return
      setIsFetching(true)

      const response = await singIn(email, password)

      setIsFetching(!response)
    } catch (err) {
      event.preventDefault()
      setIsFetching(false)
    }
  }

  return (
    <Form onSubmit={LoginIn}>
      <SignInInputContainer>
        <InputAndLabelContainer>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <InputBase id="email" value={email} onChange={(e) => setEmail(e.target.value)} customSize="medium" />
        </InputAndLabelContainer>

        <InputAndLabelContainer>
          <InputLabel htmlFor='password'>Senha</InputLabel>
          <InputBase id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} customSize="medium" />
        </InputAndLabelContainer>
      </SignInInputContainer>

      <SignInButton type="submit" disabled={isFetching}>LOGAR</SignInButton>

      <SignUpButton onClick={changeToSignUpForm}>CRIAR CONTA</SignUpButton>
    </Form>
  )
}