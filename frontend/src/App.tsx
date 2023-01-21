import { ThemeProvider } from "styled-components"
import { SingIn } from "./pages/SingIn/SingIn"
import { GlobalStyle } from "./styles/globa"
import { defaultTheme } from "./styles/theme/default"

const App = () => {

  return (
    <ThemeProvider theme={defaultTheme}>
      <SingIn />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
