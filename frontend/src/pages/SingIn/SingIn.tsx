import { useState } from "react"
import {
  Container,
  LeftContainer,
  LeftFooter,
  LeftFooterText,
  LeftFooterTitle,
  LeftImage,
  LeftImgContainer,
  RightCardContainer,
  RightContainer,
  RightImageLogo
} from "./style"

import FullLogo from '../../assets/fulllogo.svg'
import ImageSingIn from '../../assets/SignInImage.png'
import { SignInForm } from "../../components/SignInForm/SignInForm"
import { SignUpForm } from "../../components/SignUpForm/SignUpForm"

export const SingIn = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  const handleChangeSignInToSignUpForm = () => {
    setIsSignIn(state => !state)
  }

  return (
    <Container>
      <LeftContainer>
        <LeftImgContainer >
          <LeftImage src={ImageSingIn} />
        </LeftImgContainer>
        <LeftFooter >
          <LeftFooterTitle>
            Junte-se a vários clientes satisfeitos.
          </LeftFooterTitle>

          <LeftFooterText>
            Cliente HubLocal ganha mais relevância, autoridade e visibilidade. Mais de 7.000 marcas confiam na nossa plataforma. Seja uma delas!
          </LeftFooterText>
        </LeftFooter>
      </LeftContainer>

      <RightContainer>
        <RightCardContainer>
          <RightImageLogo src={FullLogo} />
          {
            isSignIn ? (<SignInForm changeToSignUpForm={handleChangeSignInToSignUpForm} />) : (
              <SignUpForm changeToSignUpForm={handleChangeSignInToSignUpForm} />
            )
          }
        </RightCardContainer>

      </RightContainer>
    </Container>
  )
}