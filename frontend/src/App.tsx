import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { GlobalSnackBar } from "./components/GlobalSnackBar/GlobalSnackBar"
import { CompanyProvider } from "./contexts/CompaniesContext"
import { GlobalSnackBarProvider } from "./contexts/GlobalSnackBarContext"
import { LoginProvider } from "./contexts/LoginContext"
import { Router } from "./routes"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"

const App = () => {

  return (
    <BrowserRouter>
      <GlobalSnackBarProvider>
        <LoginProvider>
          <CompanyProvider>
            <ThemeProvider theme={defaultTheme}>
              <Router />
              <GlobalSnackBar />
              <GlobalStyle />
            </ThemeProvider>
          </CompanyProvider>
        </LoginProvider>
      </GlobalSnackBarProvider>
    </BrowserRouter>
  )
}

export default App
