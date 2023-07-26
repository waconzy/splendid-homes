import { useState } from 'react'
import Header from './component/Header/Header'
import Hero from './component/Hero/Hero'
import './App.css'
import Companies from './component/Companies/Companis'
import Residencies from './component/Residencies/Residencies'
import Value from './component/Value/Value'
import Contact from './component/Contact/Contact'
import GetStarted from './component/GetStarted/GetStarted'
import Footer from './component/Footer/Footer'
function App() {

  return (
    <div className='App'>
     <div>
      <div className='white-gradient'/>
      <Header/>
        <Hero/>
    </div>

    <Companies/>
    <Residencies/>
    <Value/>
    <Contact/>
    <GetStarted/>
    <Footer/>
    </div>
  )
}

export default App
