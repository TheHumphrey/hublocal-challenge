import { AxiosError } from "axios";
import { ReactNode, useCallback, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { hublocalApi } from "../services/api";
import { GlobalSnackBarContext } from "./GlobalSnackBarContext";
import { ErrorResponseBody, LoginContext } from "./LoginContext";

export interface Company {
  id?: string
  name: string
  website: string
  cnpj: string
}

interface CompanyContextType {
  companies: Company[]
  getCompanies(): Promise<void>
  createNewCompany(newCompany: Company): Promise<boolean>
}

export const CompanyContext = createContext({} as CompanyContextType)

interface CompanyProviderProps {
  children: ReactNode
}

export const CompanyProvider = ({ children }: CompanyProviderProps) => {
  const [companies, setCompanies] = useState<Company[]>([])

  const token = useContextSelector(LoginContext, (context) => context.accessToken)
  const handleRenderSnackBar = useContextSelector(GlobalSnackBarContext, (context) => context.handleRenderSnackBar)

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  async function getCompanies() {
    try {
      const { data } = await hublocalApi.get<Company[]>('/app/companies', config)
      setCompanies(data)
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      handleRenderSnackBar(err?.response?.data.message!, 'error')
    }
  }

  async function createNewCompany(newCompany: Company) {
    try {
      const { data } = await hublocalApi.post<Company>('/app/companies', newCompany, config)

      setCompanies(state => [...state, data])
      handleRenderSnackBar('Empresa criada com sucesso!', 'success')
      return true
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      handleRenderSnackBar(err?.response?.data.message!, 'error')
      return false
    }
  }

  return (
    <CompanyContext.Provider value={{ companies, getCompanies, createNewCompany }}>
      {children}
    </CompanyContext.Provider>
  )
}