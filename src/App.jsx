
import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import TicketCards from './Components/Ticket-Cards/TicketCards'

const fetchData = async () =>{
  const res = await fetch('/public/tickets.json')
  return res.json();

}


  const fetchPromise = fetchData();

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<p>Loading....</p>}> 
        
        <TicketCards fetchPromise={fetchPromise}> </TicketCards>
      </Suspense>







      {/* <Footer></Footer> */}
    </>
  )
}

export default App
