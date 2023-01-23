import { useState } from "react"
import {
  Container,
  LeftContainer,
  LeftFooter,
  LeftFooterText,
  LeftFooterTitle,
  LeftImage,
  LeftImgContainer,
  SignInInputContainer,
  RightContainer,
  RightImageLogo,
  InputLabel,
  InputAndLabelContainer,
  RightCardContainer,
  SignInButton,
  SignUpButton
} from "./style"

import ImageSingIn from '../../assets/SignInImage.png'
import FullLogo from '../../assets/fulllogo.svg'
import { InputBase } from "../../components/BaseInput/BaseInput"

export const SingIn = () => {

  const [isSignIn, setIsSignIn] = useState(true)

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
            isSignIn ? (
              <>
                <SignInInputContainer>
                  <InputAndLabelContainer>
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <InputBase id="email" />
                  </InputAndLabelContainer>

                  <InputAndLabelContainer>
                    <InputLabel htmlFor='password'>Senha</InputLabel>
                    <InputBase id="password" type="password" />
                  </InputAndLabelContainer>
                </SignInInputContainer>

                <SignInButton>LOGAR</SignInButton>

                <SignUpButton onClick={() => setIsSignIn(!isSignIn)}>CRIAR CONTA</SignUpButton>
              </>
            ) : (
              <>
                <SignInInputContainer>
                  <InputAndLabelContainer>
                    <InputLabel htmlFor='name'>Nome</InputLabel>
                    <InputBase id="name" />
                  </InputAndLabelContainer>

                  <InputAndLabelContainer>
                    <InputLabel htmlFor='email'>Email</InputLabel>
                    <InputBase id="email" />
                  </InputAndLabelContainer>

                  <InputAndLabelContainer>
                    <InputLabel htmlFor='password' >Senha</InputLabel>
                    <InputBase id="password" type="password" />
                  </InputAndLabelContainer>

                  <InputAndLabelContainer>
                    <InputLabel htmlFor='password' >Repetir Senha</InputLabel>
                    <InputBase id="password" type="password" />
                  </InputAndLabelContainer>
                </SignInInputContainer>

                <SignInButton>REGISTRAR</SignInButton>

                <SignUpButton onClick={() => setIsSignIn(!isSignIn)}>LOGAR</SignUpButton>
              </>
            )
          }


        </RightCardContainer>

      </RightContainer>
    </Container>
  )
}