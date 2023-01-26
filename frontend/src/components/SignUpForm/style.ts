import styled from 'styled-components'
import { BaseButton } from '../../components/BaseButton/BaseButton'

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 11px;
`

export const SignInInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 11px;
`

export const SignUpButton = styled(BaseButton)`
  background: ${({ theme }) => theme['blue-600']};
  margin-top: 13px;
`

export const SignInButton = styled(BaseButton)`
  background: ${({ theme }) => theme['green-200']};
`