import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom'


import Home from './pages/Home'
import Login from './pages/Login'
import Registe from './pages/Registe'

function ProtectedRoutes ({ redirectTo }) {
  const token = localStorage.getItem('token');
  return token ? <Outlet /> : <Navigate to={{redirectTo} } /> 
}

export default function MyRoutes () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registe" element={<Registe />} />
        <Route element={<ProtectedRoutes redirectTo='/' />}>
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}