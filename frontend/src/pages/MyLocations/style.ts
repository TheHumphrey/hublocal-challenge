import styled from 'styled-components'

export const LocationContainer = styled.div`
  width: 100%;
  height: 91%;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 35px;
`

export const LocationTitle = styled.h1`
  width: 500px;
  height: 130px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 3.75rem;
  line-height: 4.0625rem;

  text-align: center;

  color: ${({ theme }) => theme.black};
`

export const LocationTableAndButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 25px;
`