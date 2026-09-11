
import { Suspense } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Nav from './components/Nav'
import type { Technology } from './components/types/Types'
import TechnologyListCard from './components/tecnology/TechnologyListCard'

const TechnologyListCardFetch =async() :Promise<Technology[]>=>{
  const res = await fetch("/public/data.json")
  const data = await res.json()
  return data

}


// const playersFetch = async() :Promise<Iplayer[]>=>{
//   const res = await fetch("/data.json");
//   const data =await res.json();
//   return data;
// }
// function App() {
//   const [coin,setCoin] = useState(2000)
// const playersPromise =playersFetch()

//   return (
//     <>
    
//       <Nav coin={coin}></Nav>
//       <Banner></Banner>
//        <Suspense fallback ={<h2>Loading......</h2>}>
//         <Players playersPromise ={playersPromise} coin={coin} setCoin ={setCoin}></Players>
//        </Suspense>
      

function App() {


  return (
    <>
    
     <Nav></Nav>
     <Banner></Banner>
     <Suspense fallback={<h2>Loading.......</h2>}>
      <TechnologyListCard></TechnologyListCard>
     </Suspense>
     <Footer></Footer>
    
      
    </>
  )
}

export default App