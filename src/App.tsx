
import { Suspense } from 'react'

import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Nav from './components/Nav'
import TechnologiesPage from './components/tecnology/TechnologiesPage'






      

function App() {
  


  return (
    <>
    
     <Nav></Nav>
     <Banner></Banner>
     <Suspense fallback={<h2>Loading.......</h2>}>
      <TechnologiesPage></TechnologiesPage>
     </Suspense>
     <Footer></Footer>
    
      
    </>
  )
}

export default App

