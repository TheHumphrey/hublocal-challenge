import styled from 'styled-components'
import { BaseButton } from '../../components/BaseButton/BaseButton'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: minmax(auto, 720px) 1fr;
`

export const LeftContainer = styled.main`
  position: relative;

  background-color: ${({ theme }) => theme['blue-700']};

  @media (max-width: 768px) {
    display: none;
  }
`

export const LeftImgContainer = styled.div`
  width: 100%;
  height: calc(100% - 12.375rem);

  position: relative;
  overflow: hidden;
`

export const LeftImage = styled.img`
  width: 100%;
  height: 80%;

  position: absolute;
  bottom: 0;

  object-fit: cover;
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
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  padding: 2rem;

  background: linear-gradient(90deg, ${({ theme }) => theme.white} 0%, ${({ theme }) => theme['white-100']} 14.58%);
`

export const RightCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;

  gap: 24px;
`

export const RightImageLogo = styled.img`
  margin-bottom: 9px;
`