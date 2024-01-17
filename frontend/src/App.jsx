import { useState, createContext } from "react";
import {
  jsxDEV as _jsxDEV,
  Fragment as _Fragment,
} from "react/jsx-dev-runtime";
import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashbored/Dashored";
import Detailed from "./components/Detailed/Detailed";
import Profile from"./components/profile/Profile"
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
export const tokenContext = createContext();
function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") || false
  );
  const [allInitiative, setAllInitiative] = useState([]);
  const [edit, setEdit] = useState(localStorage.getItem("edit") || "")
const [id, setId] = useState(localStorage.getItem("id") || "")

const [userId, setUserId] = useState(localStorage.getItem("userId") || "")
  return (
    <>
      <tokenContext.Provider
        value={{edit,
          setEdit,
          token,
          setToken,
          isLoggedIn,
          setIsLoggedIn,
          allInitiative,
          setAllInitiative,
          setId ,
          userId, setUserId
        }}
      >
        <Navbar />
        
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/initiativeDetails/:id"
            element={
              <Detailed />
            }
          />
           <Route
            path="/main"
            element={
              <Main />
            }
          />
           <Route
            path="/profile"
            element={
              <Profile />
            }
          />
        </Routes>
       
        


      </tokenContext.Provider>
    </>
  );
}

export default App;
