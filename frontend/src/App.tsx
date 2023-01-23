import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { Router } from "./routes"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"

const App = () => {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
