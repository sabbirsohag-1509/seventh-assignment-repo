import React from 'react';

const TicketCard = ({card}) => {

    console.log(card)

    return (
        <div> 
            <div className='w-[380px] h-auto p-5 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-md'> 
                <div className='flex justify-between'> 
                    <h1 className='text-lg'>Login Issues - Can't Access Account</h1>
                    <p className='text-lg '>Open</p>
                </div>
                <div> 
                    <p className='text-sm text-gray-500 pt-2'>Customer is unable to log in to their account. They've tried resetting their password multiple times but still...</p>
                </div>

                <div className='flex gap-5 pt-3'> 
                    <div className='flex gap-3 pt-2'> 
                        <p className='text-sm'>#1001</p>
                        <p className='text-sm'>HIGH PRIORITY</p>
                    </div>
                    <div className='flex gap-3 pt-2'> 
                        <p className='text-sm'>Michael Brown</p>
                        <p className='text-sm'>1/17/2024</p>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default TicketCard;