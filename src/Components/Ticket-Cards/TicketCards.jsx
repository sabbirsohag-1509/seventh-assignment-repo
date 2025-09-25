import React, { use } from 'react';
import TicketCard from './TicketCard';
import TaskStatus from '../TaskStatus/TaskStatus';

const TicketCards = ({fetchPromise , handleTicketCard, progressTaskStatus}) => {
    const cards = use (fetchPromise);

    // console.log(cards)

    return (
       <div className='max-w-[1150px] mx-auto flex gap-5'> 
         <div className='w-[]'>
            <h1 className='mt-10 text-[27px] font-semibold'>Customer Tickets</h1>

            <div className=' grid grid-cols-2 gap-5 mt-8 '> 
                {
                cards.map(card => <TicketCard handleTicketCard={handleTicketCard} key={card.id}  card={card}></TicketCard>)
                }
            </div>
            </div>

                <TaskStatus progressTaskStatus={progressTaskStatus}></TaskStatus>
            
       </div>
    );
};

export default TicketCards;