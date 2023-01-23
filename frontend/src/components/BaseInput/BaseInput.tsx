import styled from 'styled-components'

export const InputLabel = styled.label`
  min-width: 45px;
  height: 20px;
  
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;
  
  text-align: left;
  
  color: #373737;
  `

export const InputBase = styled.input`
  box-sizing: border-box;

  width: 25rem;
  height: 3.75rem;

  border: 2px solid #0385FD;
  border-radius: 5px;

  padding: 16px;
  font-size: 1rem;
  color: ${({ theme }) => theme['gray-600']};

  :focus-visible {
    outline: none;
    border: 2px solid ${({ theme }) => theme['green-200']};
  }
`

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 7px;
`

interface InputBaseProps {
  label: string;
  type: React.HTMLInputTypeAttribute | undefined;
  id: 'string'
}

export const InputWithLabel = () => {
  return (
    <InputAndLabelContainer>
      <InputLabel htmlFor='password' >Repetir Senha</InputLabel>
      <InputBase id="password" type="password" />
    </InputAndLabelContainer>
  )
}