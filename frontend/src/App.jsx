import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"


import Layout from "./layout/Layout"
import Community from "./pages/Community"



function App() {
 

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/community' element={<Community/>}/>
  </Routes></BrowserRouter>
      
  )
}

export default App
