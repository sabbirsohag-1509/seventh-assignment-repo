import React from 'react';

const ResolvedTask = ({resolved}) => {
    // console.log(resolved.title)
    return (
        <div className='mt-3 bg-[#c2c1c1e2] p-2 rounded-md'>
            <h1 className='text-[16px] font-semibold'>{resolved.title}</h1>
            <div className='flex justify-between py-3 mt-4'> 
                <p className='text-sm text-green-900'>✔ Completed</p>
                <button className='text-sm shadow-md'>Click to remove</button>
            </div>
        </div>
    );
};

export default ResolvedTask;