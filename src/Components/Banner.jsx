import React from 'react';

const Banner = ({progressCount, resolvedCount}) => {
    
    return (
        <div className='max-w-[1150px] mx-auto mt-5 lg:mt-14 flex flex-col lg:flex-row gap-3 lg:gap-10 h-auto lg:h-48 '>
            
            <div className='flex flex-col justify-center items-center text-center  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] w-full lg:w-[50%] rounded-2xl text-white relative p-4'> 
                <div> 
                    
                    <h1 className='text-2xl font-bold'>In-Progress</h1>
                    <p className='text-3xl lg:text-4xl font-semibold pt-1 lg:pt-3'>{progressCount}</p>
                </div>
                    <div className="w-47 lg:w-64 absolute left-0 inset-0 bg-[url('/vector1.png')] bg-cover bg-center "></div>
                    <div className="w-47 lg:w-64 absolute right-0 inset-0 bg-[url('/vector1.png')] bg-cover bg-center scale-x-[-1] left-56 lg:left-77 "></div>
            </div> 

            <div className='flex flex-col justify-center items-center text-center bg-gradient-to-r from-[#54CF68] to-[#00827A] w-full lg:w-[50%] rounded-2xl text-white relative p-4'> 
                <div> 
                    <h1 className='text-2xl font-bold'>Resolved</h1>
                    <p className='text-3xl lg:text-4xl font-semibold pt-1 lg:pt-3'>{resolvedCount}</p>
                </div>

                <div className="w-47 lg:w-64 absolute right-0 inset-0 bg-[url('/vector1.png')] bg-cover bg-center "></div>
                <div className="w-47 lg:w-64 absolute inset-0 bg-[url('/vector1.png')] bg-cover bg-center scale-x-[-1] left-56 lg:left-77 "></div>
            </div>
        </div>
    );
};

export default Banner;