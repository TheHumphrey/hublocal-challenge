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

interface InputBaseProps {
  customSize: 'small' | 'medium' | 'large'
  width?: string
}

const sizes = {
  small: '2.8125rem',
  medium: '3.75rem',
  large: '4.5rem'
}

export const InputBase = styled.input<InputBaseProps>`
  box-sizing: border-box;

  ${({ width }) => width ? `width: ${width}` : `width: 25rem`};
  height: ${({ customSize }) => sizes[customSize]};

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

interface InputWithLabelProps {
  options?: {
    size?: 'small' | 'medium' | 'large'
    width?: string
  }
  label?: string;
  type?: React.HTMLInputTypeAttribute | undefined;
  id?: string
  value?: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  maxLength?: number
}

export const InputWithLabel = ({ label, id, type, onChange, value, options = { size: 'medium' }, maxLength }: InputWithLabelProps) => {
  const { size = 'medium', width } = options

  return (
    <InputAndLabelContainer>
      <InputLabel htmlFor={id} >{label}</InputLabel>
      <InputBase
        id={id}
        type={type}
        customSize={size}
        width={width}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
    </InputAndLabelContainer>
  )
}