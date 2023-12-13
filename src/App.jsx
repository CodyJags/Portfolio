import { useState } from 'react'
import Sitenav from './Components/Sitenav'
import MainNav from './Components/MainNav'
import Work from './Components/Work'
import Projects from './Components/Projects'
import Contact from './Components/Contact'

function App() {

  return (
   <div>
    <Sitenav />
    <MainNav />
    <Work />
    <Projects />
    <Contact />
   </div>
  )
}

export default App
