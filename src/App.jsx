import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./componects/Header"
import Footer from "./componects/Footer"
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
    <div className="header">
      <Header/>
    </div>
    <div className="footer">
      <Footer/>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
