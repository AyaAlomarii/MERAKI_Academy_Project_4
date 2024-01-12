import { useState ,createContext} from 'react'
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Register from './components/Register';
import Login from "./components/Login/Login"
export const tokenContext = createContext();
function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "")
  const [isLoggedIn , setIsLoggedIn ] = useState(localStorage.getItem("isLoggedIn")||false)
  const [allArticles, setAllArticles] = useState([])

  return (
    <>
          <tokenContext.Provider value={{token,setToken,isLoggedIn,setIsLoggedIn,allArticles,setAllArticles}}>

    <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login  />} />
    </Routes>
    </tokenContext.Provider>
    </>
  )
}

export default App
