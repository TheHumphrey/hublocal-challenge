// import { InputLabel, InputBase, FormControl } from '@mui/material'
import { Button, styled } from '@mui/material';

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
  InputBase,
  InputLabel,
  InputAndLabelContainer,
  RightCardContainer,
  SignInButton,
  SignUpButton
} from "./style"

import ImageSingIn from '../../assets/SignInImage.png'
import FullLogo from '../../assets/fulllogo.svg'


export const SingIn = () => {

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

          <SignInInputContainer>
            <InputAndLabelContainer>
              <InputLabel htmlFor='email'>Email</InputLabel>
              <InputBase id="email" />
            </InputAndLabelContainer>

            <InputAndLabelContainer>
              <InputLabel htmlFor='email'>Senha</InputLabel>
              <InputBase id="senha" />
            </InputAndLabelContainer>
          </SignInInputContainer>

          <SignInButton>LOGAR</SignInButton>

          <SignUpButton>CRIAR CONTA</SignUpButton>

        </RightCardContainer>

      </RightContainer>
    </Container>
  )
}