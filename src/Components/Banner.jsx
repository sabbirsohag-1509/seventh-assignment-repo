import React from 'react';

const Banner = () => {
    return (
        <div className='container mx-auto mt-14 flex gap-10 h-48'>
            <div className='flex flex-col justify-center items-center text-center  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-[50%] rounded-2xl text-white'> 
                <div> 
                    <h1 className='text-2xl font-bold'>In-Progress</h1>
                    <p className='text-2xl font-semibold pt-3'>0</p>
                </div>
            </div> 

            <div className='flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#54CF68] to-[#00827A] w-[50%] rounded-2xl text-white'> 
                <div> 
                    <h1 className='text-2xl font-bold'>Resolved</h1>
                    <p className='text-2xl font-semibold pt-3'>0</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;