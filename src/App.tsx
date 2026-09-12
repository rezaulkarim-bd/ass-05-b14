
import { Suspense } from 'react'
import{ React } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Nav from './components/Nav'
import type { Technology } from './components/types/Technology'
import TechnologiesPage from './components/tecnology/TechnologiesPage'



const technologiesPageFetch =async() :Promise<Technology[]>=>{
  const res = await fetch("/public/data.json")
  const data = await res.json()
  return data

}
      

function App() {
  const technologiesPagePromise = technologiesPageFetch()


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
// TypeScript
// import React from 'react';
// import TechnologiesPage from './components/technologies/TechnologiesPage';

// export default function App() {
//   return (
//     <div>
//       <TechnologiesPage />
//     </div>
//   );
// }