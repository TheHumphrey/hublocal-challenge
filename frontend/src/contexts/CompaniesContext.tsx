import { AxiosError } from "axios";
import { ReactNode, useEffect, useState } from "react";
import { createContext, useContextSelector } from "use-context-selector";
import { hublocalApi } from "../services/api";
import { GlobalSnackBarContext } from "./GlobalSnackBarContext";
import { ErrorResponseBody, LoginContext } from "./LoginContext";

export interface Company {
  id?: string
  name: string
  website: string
  cnpj: string
  locations?: Location[]
}

export interface Location {
  id?: number
  name: string
  cep: string
  street: string
  number: string
  district: string
  city: string
  state: string
  companyId?: string
}

interface CompanyContextType {
  companies: Company[]
  getCompanies(): Promise<void>
  createNewCompany(newCompany: Company): Promise<boolean>
  putCompanyById(company: Company): Promise<boolean>
  deleteCompanyById(id: string): Promise<boolean>
  locations: Location[]
  getLocations(companyId: string): Promise<void>
  createNewLocation(newLocation: Location, companyId: string): Promise<boolean>
  putLocationById(location: Location): Promise<boolean>
  deleteLocationById(id: number): Promise<boolean>
  companySelectedId: string
  onChangeSelectedCompanyOnLayout(event: React.ChangeEvent<HTMLSelectElement>): void
}

export const CompanyContext = createContext({} as CompanyContextType)

interface CompanyProviderProps {
  children: ReactNode
}

export const CompanyProvider = ({ children }: CompanyProviderProps) => {
  const [companies, setCompanies] = useState<Company[]>([])
  const [locations, setLocations] = useState<Location[]>([])
  const [companySelectedId, setCompanySelectedId] = useState('')

  const { logOut, token } = useContextSelector(LoginContext, (context) => {
    return {
      token: context.accessToken,
      logOut: context.logOut
    }
  })
  const handleRenderSnackBar = useContextSelector(GlobalSnackBarContext, (context) => context.handleRenderSnackBar)


  useEffect(() => {
    token && getCompanies()
  }, [])

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  async function getCompanies() {
    try {
      if (companies.length !== 0) return
      const { data } = await hublocalApi.get<Company[]>('/app/companies', config)
      setCompanies(data)
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      handleRenderSnackBar(err?.response?.data.message!, 'error')
      isUnauthorizedError(err?.response?.data?.statusCode)
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
      isUnauthorizedError(err?.response?.data?.statusCode)
      return false
    }
  }

  async function putCompanyById(company: Company) {
    try {
      const id = company.id
      const dataToSend = company
      delete dataToSend.id
      const { data } = await hublocalApi.put<Company>(`/app/companies/${id}`, dataToSend, config)

      setCompanies(state => state.map(item => item?.id === data?.id ? data : item))
      handleRenderSnackBar('Empresa editada com sucesso!', 'success')
      return true
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      handleRenderSnackBar(err?.response?.data.message!, 'error')
      isUnauthorizedError(err?.response?.data?.statusCode)
      return false
    }
  }

  async function deleteCompanyById(id: string) {
    try {
      const { data } = await hublocalApi.delete<Company>(`/app/companies/${id}`, config)

      setCompanies(state => state.filter(item => item.id !== data.id))
      handleRenderSnackBar('Empresa excluida com sucesso!', 'success')
      return true
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      handleRenderSnackBar(err?.response?.data.message!, 'error')
      isUnauthorizedError(err?.response?.data?.statusCode)
      return false
    }
  }

  async function getLocations(companyId: string) {
    try {
      const { data } = await hublocalApi.get<Location[]>(`/app/location/${companyId}`, config)
      setLocations(data)
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      handleRenderSnackBar(err?.response?.data.message!, 'error')
      isUnauthorizedError(err?.response?.data?.statusCode)
    }
  }

  async function createNewLocation(newLocation: Location, companyId: string) {
    try {
      const { data } = await hublocalApi.post<Location>(`/app/location/${companyId}`, newLocation, config)

      setLocations(state => [...state, data])
      handleRenderSnackBar('Local cadastrado com sucesso!', 'success')
      return true
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      handleRenderSnackBar(err?.response?.data.message!, 'error')
      isUnauthorizedError(err?.response?.data?.statusCode)
      return false
    }
  }

  async function putLocationById(location: Location) {
    try {
      const id = location.id
      const dataToSend = location
      delete dataToSend.id
      delete dataToSend.companyId
      const { data } = await hublocalApi.put<Location>(`/app/location/${id}`, dataToSend, config)

      setLocations(state => state.map(item => item?.id === data?.id ? data : item))
      handleRenderSnackBar('Local editado com sucesso!', 'success')
      return true
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      handleRenderSnackBar(err?.response?.data.message!, 'error')
      isUnauthorizedError(err?.response?.data?.statusCode)
      return false
    }
  }

  async function deleteLocationById(id: number) {
    try {
      const { data } = await hublocalApi.delete<Location>(`/app/location/${id}`, config)

      setLocations(state => state.filter(item => item.id !== data.id))
      handleRenderSnackBar('Local excluido com sucesso!', 'success')
      return true
    } catch (error) {
      const err = error as AxiosError<ErrorResponseBody>
      handleRenderSnackBar(err?.response?.data.message!, 'error')
      isUnauthorizedError(err?.response?.data?.statusCode)
      return false
    }
  }

  function onChangeSelectedCompanyOnLayout(event: React.ChangeEvent<HTMLSelectElement>) {
    if (event.target.value) return
    setCompanySelectedId(event.target.value)
  }

  function isUnauthorizedError(statusCode?: number) {
    if (!statusCode) return
    if (statusCode === 401) return logOut()
  }

  return (
    <CompanyContext.Provider value={{
      companies,
      getCompanies,
      createNewCompany,
      putCompanyById,
      deleteCompanyById,
      locations,
      getLocations,
      createNewLocation,
      putLocationById,
      deleteLocationById,
      onChangeSelectedCompanyOnLayout,
      companySelectedId
    }}>
      {children}
    </CompanyContext.Provider>
  )
}