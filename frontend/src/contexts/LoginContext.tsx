import { ReactNode, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { createContext } from "use-context-selector";
import { hublocalApi } from "../services/api";

interface User {
  id: string,
  name: string,
  email: string
}

interface SignInResponse {
  user: User
  access_token: string
}

interface LoginContextType {
  singIn(email: string, password: string): Promise<void>
  singUp(name: string, email: string, password: string): Promise<boolean>
  logOut(): void
  user: User
  isAuth: boolean
  isFetching: boolean
}

const localStorageKeys = 'user'

export const LoginContext = createContext({} as LoginContextType)

interface LoginProviderProps {
  children: ReactNode
}

export const LoginProvider = ({ children }: LoginProviderProps) => {
  const [user, setUser] = useState({} as User)
  const [accessToken, setAccessToken] = useState('')
  const [cookies, setCookies] = useCookies(['access_token'])
  const [isAuth, setIsAuth] = useState(false)
  const [isFetching, setIsFetching] = useState(false)

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
    } catch (err) {
      console.warn(err)
      setIsFetching(false)
    }
  }

  async function singUp(name: string, email: string, password: string) {
    try {
      if (name || email || password) {
        setIsFetching(true)
        await hublocalApi.post('user/create', { name, email, password })
        setIsFetching(false)
        return true
      }
      return false
    } catch (err) {
      console.warn(err)
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
    <LoginContext.Provider value={{ singIn, singUp, logOut, user, isAuth, isFetching }}>
      {children}
    </LoginContext.Provider>
  )
}