import styled from 'styled-components'


export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-columns: minmax(auto, 720px) 1fr;
`

export const LeftContainer = styled.main`
  position: relative;

  background-color: ${({ theme }) => theme['blue-700']};
  
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

export const SignInInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 11px;
`

export const InputAndLabelContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 7px;
`

export const InputLabel = styled.label`
  /* position: absolute; */
  width: 45px;
  height: 20px;
  /* left: 760px;
  top: 313px; */

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.25rem;

  text-align: center;

  color: #373737;
`

export const InputBase = styled.input`
  box-sizing: border-box;

  width: 25rem;
  height: 3.75rem;

  border: 2px solid #0385FD;
  border-radius: 5px;
`

export const ButtonBase = styled.button`
  width: 25.0625rem;
  height: 3.75rem;

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
`

export const SignInButton = styled(ButtonBase)`
  background: ${({ theme }) => theme['blue-600']};
`

export const SignUpButton = styled(ButtonBase)`
  background: ${({ theme }) => theme['green-200']};
`