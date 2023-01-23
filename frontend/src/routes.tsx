import { Routes, Route } from 'react-router-dom'
import { LoggedLayout } from './layout/LoggedLayout'
import { MyCompanies } from './pages/MyCompanies/MyCompanies'
import { SingIn } from './pages/SingIn/SingIn'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<SingIn />} />
      <Route path="/companies" element={<LoggedLayout />} >
        <Route path="/companies" element={<MyCompanies />} />
      </Route>
    </Routes>
  )
}