
import { Suspense, useEffect, useState } from 'react'
import './App.css'
import { toast, ToastContainer } from 'react-toastify';
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import TicketCards from './Components/Ticket-Cards/TicketCards'

// const fetchData = async () =>{
//   const res = await fetch('/public/tickets.json')
//   return res.json();

// }




  // const fetchPromise = fetchData();
  // console.log("all data",fetchPromise)

function App() {

  const [progressCount, setProgressCount] = useState(0);
  const [progressTaskStatus, setProgressTaskStatus] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [resolveStatus, setResolvedStatus] = useState([]);
  const [cards, setCards] = useState([]);

    useEffect(()=>{ 
      fetch('/public/tickets.json')
      .then(res => res.json())
      .then(data => setCards(data))
    } ,[])

  const handleTicketCard = (card) => {
    setProgressCount(count => count + 1);
    setProgressTaskStatus(count => [...count, card]);
    toast.success('In-Progress!');
    
  }

  const handleCompleteBtn = (card) =>{
    setProgressTaskStatus(prev => prev.filter(c => c.id !== card?.id));
    setResolvedCount (count => count +1)
    setProgressCount(count => count > 0 ? count -1 : 0)
    toast.success('Completed!');
    setResolvedStatus(stat => [...stat, card])
    setCards(cards.filter (car => car?.id !== card?.id))
  }

  return (
    <>
      <Navbar></Navbar>
      <Banner resolvedCount={resolvedCount} progressCount={progressCount}></Banner>

      <Suspense fallback={
         <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-xl"></span>
        </div>
        }> 
        
        <TicketCards cards={cards} resolveStatus={resolveStatus} handleCompleteBtn={handleCompleteBtn} progressTaskStatus={progressTaskStatus} handleTicketCard={handleTicketCard} > </TicketCards>
      </Suspense>







      <Footer></Footer>

      <ToastContainer position='top-center'></ToastContainer>
      


    </>
  )
}

export default App
