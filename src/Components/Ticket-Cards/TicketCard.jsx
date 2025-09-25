import React from 'react';
import { CiCalendar } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";

const TicketCard = ({card, handleTicketCard }) => {

    // console.log(card)

    return (
        <div> 
            <div onClick={()=>handleTicketCard(card)} className=' h-[170px] p-5 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-md cursor-pointer'> 
                <div className='flex justify-between'> 
                    <h1 className='text-lg'>{card.title}</h1>
                    <p className={`flex items-center text-lg pr-2 h-7 rounded-full   ${card.status==="Open"?"text-green-600 bg-green-200":"text-amber-400 bg-amber-200"}`}>
                        <GoDotFill className=" text-2xl" />{card.status}
                    </p>
                </div>
                <div> 
                    <p className='text-sm text-gray-500 pt-2'>{card.description}</p>
                </div>

                <div className='flex gap-5 pt-3'> 
                    <div className='flex gap-3 pt-2'> 
                        <p className='text-sm text-gray-700'>#{card.id}</p>
                        <p className={`text-sm ${card.priority==="High Priority"?"text-red-600":card.priority==="Low Priority"?"text-green-600":"text-amber-400"}`}>{card.priority}</p>
                    </div>
                    <div className='flex gap-3 pt-2'> 
                        <p className='text-sm'>{card.reporter}</p>
                        <p className='flex items-center gap-1 text-sm'> 
                            <CiCalendar className='' />{card.createdAt}
                        </p>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default TicketCard;