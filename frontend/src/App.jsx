import { useState } from 'react'
import { jsxDEV as _jsxDEV, Fragment as _Fragment } from "react/jsx-dev-runtime";
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Register from './components/Register';
function App() {


  return (
    <>
    <Routes>
    <Route path="/register" element={<Register />} />

    </Routes>
    </>
  )
}

export default App
