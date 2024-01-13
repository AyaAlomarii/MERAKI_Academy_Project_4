import { useState ,createContext} from 'react'
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Register from './components/Register';
import Login from "./components/Login/Login";
import Dashboard from './components/Dashbored/Dashored';
export const tokenContext = createContext();
function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "")
  const [isLoggedIn , setIsLoggedIn ] = useState(localStorage.getItem("isLoggedIn")||false)
  const [allInitiative, setAllInitiative] = useState([])

  return (
    <>
          <tokenContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn,allInitiative,setAllInitiative}}>

    <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login  />} />
    <Route path="/dashboard" element={<Dashboard  />} />

    </Routes>
    </tokenContext.Provider>
    </>
  )
}

export default App
