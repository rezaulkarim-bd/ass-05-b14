
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Nav from './components/Nav'
import type { Technology } from './components/types/Types'
import Technologies from './components/tecnology/Technologies'


const technologiesFetch =async() :Promise<Technology[]>=>{
  const res = await fetch("/public/data.json")
  const data = await res.json()
  return data

}
      //  return (
//     <>
    
//       <Nav coin={coin}></Nav>
//       <Banner></Banner>
//        <Suspense fallback ={<h2>Loading......</h2>}>
//         <Players playersPromise ={playersPromise} coin={coin} setCoin ={setCoin}></Players>
//        </Suspense>
      

function App() {
  const technologiesPromise = technologiesFetch()


  return (
    <>
    
     <Nav></Nav>
     <Banner></Banner>
     <Suspense fallback={<h2>Loading.......</h2>}>
     <Technologies technologiesPromise={technologiesPromise}></Technologies>
     </Suspense>
     <Footer></Footer>
    
      
    </>
  )
}

export default App