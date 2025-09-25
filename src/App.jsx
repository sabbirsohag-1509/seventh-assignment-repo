
import { Suspense, useState } from 'react'
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

  const [progressCount, setProgressCount] = useState(0);
  const [progressTaskStatus, setProgressTaskStatus] = useState([]);

  const handleTicketCard = (card) => {
    setProgressCount(count => count + 1)
    setProgressTaskStatus(count => [...count, card])
    alert ('In Progress!')
    
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner progressCount={progressCount}></Banner>

      <Suspense fallback={<p>Loading....</p>}> 
        
        <TicketCards progressTaskStatus={progressTaskStatus} handleTicketCard={handleTicketCard} fetchPromise={fetchPromise}> </TicketCards>
      </Suspense>







      <Footer></Footer>
    </>
  )
}

export default App
