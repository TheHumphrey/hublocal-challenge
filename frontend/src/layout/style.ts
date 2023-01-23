import styled from 'styled-components'

export const LayoutContainer = styled.div`
  width: 100vw;
  height: 100vh;
`

export const LayoutHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: space-between;

  width: 100vw;
  height: 80px;
  background-color: ${({ theme }) => theme.white};
`

export const CompanyNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 80px;

  align-items: center;
  gap: 10px;
  padding: 34px;
`

export const CompanyName = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 20px;

  text-align: center;
  color: ${({ theme }) => theme.black};
`

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;

  /* justify-content: center; */
  align-items: center;

  width: 15.6875rem;
  height: 80px;
  padding: 32px;
  gap: 10px;

  background: ${({ theme }) => theme['white-200']};
`

export const UserAvatar = styled.img`
  width: calc(3rem + 12px);
  height: calc(3rem + 12px);
  border-radius: 50%;

  object-fit: cover;
`

export const UserName = styled.strong`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;

  text-align: center;
  color: ${({ theme }) => theme.black};
`