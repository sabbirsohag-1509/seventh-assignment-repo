import React from 'react';

const Status = ({card,handleCompleteBtn}) => {
    console.log(handleCompleteBtn)
    return (
        <div className='bg-white p-2 rounded-md flex flex-col gap-3 mt-3'>
            <h1>{card?.title}</h1>
            <button onClick={()=>handleCompleteBtn(card)} className="btn bg-[#048479d9] text-white">Complete</button>
        </div>
    );
};

export default Status;