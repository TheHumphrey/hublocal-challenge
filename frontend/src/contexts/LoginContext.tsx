import { AxiosError } from "axios";
import { ReactNode, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { createContext, useContextSelector } from "use-context-selector";
import { hublocalApi } from "../services/api";
import { GlobalSnackBarContext } from "./GlobalSnackBarContext";

interface User {
  id: string,
  name: string,
  email: string
}

interface SignInResponse {
  user: User
  access_token: string
}

export interface ErrorResponseBody {
  message: string
  error: string
  statusCode: number
}

interface LoginContextType {
  singIn(email: string, password: string): Promise<boolean>
  singUp(name: string, email: string, password: string): Promise<boolean>
  logOut(): void
  user: User
  isAuth: boolean
  isFetching: boolean
  accessToken: string
}

const localStorageKeys = 'user'

export const LoginContext = createContext({} as LoginContextType)

interface LoginProviderProps {
  children: ReactNode
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [user, setUser] = useState({} as User)
  const [cookies, setCookies] = useCookies(['access_token'])
  const [accessToken, setAccessToken] = useState(cookies?.access_token)
  const [isAuth, setIsAuth] = useState(!!cookies?.access_token)
  const [isFetching, setIsFetching] = useState(false)

  const handleRenderSnackBar = useContextSelector(GlobalSnackBarContext, (context) => context.handleRenderSnackBar)

  useEffect(() => {
    const userDataOnLocalStorage = localStorage.getItem(localStorageKeys)
    if (userDataOnLocalStorage) {
      const userParseToJSObject: User = JSON.parse(userDataOnLocalStorage)
      setUser(userParseToJSObject)
    }
    if (cookies?.access_token) {
      setAccessToken(cookies.access_token)
      setIsAuth(true)
    }
  }, [])

  async function singIn(email: string, password: string) {
    try {
      setIsFetching(true)
      const { data } = await hublocalApi.post<SignInResponse>('/login', { email, password })
      setAccessToken(data?.access_token)
      setUser(data?.user)
      setCookies('access_token', data?.access_token, { path: '/' })
      localStorage.setItem(localStorageKeys, JSON.stringify(data.user))
      setIsAuth(true)
      setIsFetching(false)
      handleRenderSnackBar('Login realizado com sucesso!', 'success')
      return true
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      setIsFetching(false)
      handleRenderSnackBar(err?.response?.data.message!, 'error')
      return false
    }
  }

  async function singUp(name: string, email: string, password: string) {
    try {
      if (name || email || password) {
        setIsFetching(true)
        await hublocalApi.post('user/create', { name, email, password })
        setIsFetching(false)
        handleRenderSnackBar('Cadastro Realizado com sucesso!', 'success')
        return true
      }
      return false
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      setIsFetching(false)
      handleRenderSnackBar(err?.response?.data.message!, 'error')
      setIsFetching(false)
      return false
    }
  }

  function logOut() {
    try {
      setUser({} as User)
      setAccessToken('')
      setCookies('access_token', '', { path: '/' })
      setIsAuth(false)
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <LoginContext.Provider value={{ singIn, singUp, logOut, user, isAuth, isFetching, accessToken }}>
      {children}
    </LoginContext.Provider>
  )
}