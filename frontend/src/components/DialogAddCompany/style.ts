import styled from 'styled-components'
import { BaseButton } from '../BaseButton/BaseButton'

export const ButtonToAdd = styled(BaseButton)`
  position: relative;
  background-color: ${({ theme }) => theme['blue-600']};
  width: 16.125rem;
`

export const FieldContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 9px;
`