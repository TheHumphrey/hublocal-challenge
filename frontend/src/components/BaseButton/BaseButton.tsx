import styled, { css } from "styled-components"

interface BaseButtonProps {
  customWidth?: string;
  height?: string;
}

export const BaseButton = styled.button<BaseButtonProps>`
  ${({ customWidth }) => customWidth ? css`width: ${customWidth} !important` : `width: 25.0625rem !important`};
  ${({ height }) => height ? css`height: ${height}` : `height: 3.75rem`};

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  border: none;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.white};

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }

  :disabled {
    cursor: not-allowed;
    opacity: 0.9;
  }
`