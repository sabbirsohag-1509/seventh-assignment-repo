import React, { use } from 'react';
import TicketCard from './TicketCard';

const TicketCards = ({fetchPromise}) => {
    const cards = use (fetchPromise);

    // console.log(cards)

    return (
       <div className='container mx-auto flex gap-5'> 
         <div className='w-[1000px]'>
            <h1 className='mt-10 text-[27px] font-semibold'>Customer Tickets</h1>

            <div className=' grid grid-cols-2 gap-5 mt-8 '> 
                {
                cards.map(card => <TicketCard key={card.id} card={card}></TicketCard>)
                }
            </div>
            </div>


            <div className="w-[250px] bg-gray-200 p-4 rounded-lg mt-10 mr-2">
                <h2 className="text-[27px] font-semibold">Task Status</h2>
            </div>
       </div>
    );
};

export default TicketCards;