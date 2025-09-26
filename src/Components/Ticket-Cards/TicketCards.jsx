import React, { use } from 'react';
import TicketCard from './TicketCard';
import TaskStatus from '../TaskStatus/TaskStatus';

const TicketCards = ({ fetchPromise, handleTicketCard, progressTaskStatus,handleCompleteBtn, resolveStatus }) => {
  const cards = use(fetchPromise);

  return (
    <div className="max-w-[1150px] mx-auto mt-10 flex flex-col lg:flex-row gap-8">
      
     
      <div className="order-1 lg:order-2 w-full lg:w-[280px]">
        <TaskStatus resolveStatus={resolveStatus} handleCompleteBtn={handleCompleteBtn} progressTaskStatus={progressTaskStatus}></TaskStatus>
      </div>

      <div className="order-2 lg:order-1 flex-1">
        <h1 className="text-[27px] text-center lg:text-left font-semibold mb-6">Customer Tickets</h1>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cards.map((card) => (
            <TicketCard
              handleTicketCard={handleTicketCard}
              key={card.id}
              card={card}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default TicketCards;
