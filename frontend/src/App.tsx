import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { LoginProvider } from "./contexts/LoginContext"
import { Router } from "./routes"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"

const App = () => {

  return (
    <BrowserRouter>
      <LoginProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </LoginProvider>
    </BrowserRouter>
  )
}

export default App
