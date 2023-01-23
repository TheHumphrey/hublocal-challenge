import styled from 'styled-components'
import { BaseButton } from '../BaseButton/BaseButton'

export const ButtonToAdd = styled(BaseButton)`
  background-color: ${({ theme }) => theme['blue-600']};
  width: 16.125rem;
`