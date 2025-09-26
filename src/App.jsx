
import { Suspense, useState } from 'react'
import './App.css'
import { toast, ToastContainer } from 'react-toastify';
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
  const [resolvedCount, setResolvedCount] = useState(0);
  const [resolveStatus, setResolvedStatus] = useState([]);

  const handleTicketCard = (card) => {
    setProgressCount(count => count + 1)
    setProgressTaskStatus(count => [...count, card])
    toast.success('In-Progress!')
    
  }

  const handleCompleteBtn = (card) =>{

    setProgressTaskStatus(prev => prev.filter(c => c.id !== card.id));

    setResolvedCount (count => count +1)
    setProgressCount(count => count -1)
    toast.success('Task Completed!');
    setResolvedStatus(stat => [...stat, card])
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner resolvedCount={resolvedCount} progressCount={progressCount}></Banner>

      <Suspense fallback={<p>Loading....</p>}> 
        
        <TicketCards resolveStatus={resolveStatus} handleCompleteBtn={handleCompleteBtn} progressTaskStatus={progressTaskStatus} handleTicketCard={handleTicketCard} fetchPromise={fetchPromise}> </TicketCards>
      </Suspense>







      <Footer></Footer>

      <ToastContainer position='top-center'></ToastContainer>
      


    </>
  )
}

export default App
