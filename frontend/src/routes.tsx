import { ReactNode } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { LoginContext } from './contexts/LoginContext'
import { LoggedLayout } from './layout/LoggedLayout'
import { MyCompanies } from './pages/MyCompanies/MyCompanies'
import { MyLocations } from './pages/MyLocations/MyLocations'
import { SingIn } from './pages/SingIn/SingIn'

interface ProtectedRoutesProps {
  children: ReactNode
}

const ProtectedRoutes = ({ children }: ProtectedRoutesProps) => {
  const isAuth = useContextSelector(LoginContext, (context) => context.isAuth)

  if (!isAuth) {
    return (
      <Navigate to="/" replace />
    )
  }

  return (
    <>
      {children}
    </>
  )
}

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/companies" element={
        <ProtectedRoutes>
          <LoggedLayout />
        </ProtectedRoutes>
      } >
        <Route path="/companies" element={<MyCompanies />} />
        <Route path="/companies/location/:id" element={<MyLocations />} />
      </Route>
    </Routes>
  )
}