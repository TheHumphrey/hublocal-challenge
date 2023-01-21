import {
  Container,
  LeftContainer,
  LeftFooter,
  LeftFooterText,
  LeftFooterTitle,
  RightContainer
} from "./style"

export const SingIn = () => {
  return (
    <Container>
      <LeftContainer>
        Left
        <LeftFooter >
          <LeftFooterTitle>
            Junte-se a vários clientes satisfeitos.
          </LeftFooterTitle>

          <LeftFooterText>
            Cliente HubLocal ganha mais relevância, autoridade e visibilidade. Mais de 7.000 marcas confiam na nossa plataforma. Seja uma delas!
          </LeftFooterText>
        </LeftFooter>
      </LeftContainer>
      <RightContainer>Right</RightContainer>
    </Container>
  )
}