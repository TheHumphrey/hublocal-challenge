import styled from 'styled-components'
import { BaseButton } from '../BaseButton/BaseButton'

export const ButtonToRemove = styled(BaseButton)`
  background: ${({ theme }) => theme['red-600']};
  width: 16.125rem;
`