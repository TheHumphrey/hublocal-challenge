import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const LeftContainer = styled.main`
  position: relative;

  background-color: ${({ theme }) => theme['blue-700']};
`

export const LeftFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 12.375rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;

  background-color: ${({ theme }) => theme['green-200']};
  color: ${({ theme }) => theme.white};
`

export const LeftFooterTitle = styled.h1`
  width: 26rem;
  height: 4.4375rem;

  font-style: normal;
  font-weight: 700;
  font-size: 2.1875rem;
  line-height: 2.1875rem;

  text-align: center;
  color: ${({ theme }) => theme.white};
`

export const LeftFooterText = styled.p`
  width: 31.6875rem;
  height: 4.0625rem;

  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  text-align: center;

  color: ${({ theme }) => theme.white};
`

export const RightContainer = styled.main`

`