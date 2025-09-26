import React from 'react';

const Navbar = () => {
    return (
    <div>
        <div className="navbar bg-base-100 shadow-sm px-4 lg:px-20 ">
        <div className="flex-1"> 
        <a className="btn btn-ghost text-lg lg:text-xl">CS — Ticket System</a>
        </div>
        
        <div className="flex-none hidden lg:flex ">
            <ul className='flex flex-col lg:flex-row gap-3 text-sm font-semibold menu menu-horizontal p-0 pr-5 '>
                <li><a className='text-sm font-semibold text-gray-600'>Home</a></li>
                <li><a className='text-sm font-semibold text-gray-600'>FAQ</a></li>
                <li><a className='text-sm font-semibold text-gray-600'>Changelog</a></li>
                <li><a className='text-sm font-semibold text-gray-600'>Blog</a></li>
                <li><a className='text-sm font-semibold text-gray-600'>Download</a></li>
                <li><a className='text-sm font-semibold text-gray-600'>Contact</a></li>
            </ul>
        </div>
        <div className="flex-none">
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-md">+ New Ticket</a>
        </div>
        </div>
    </div>
    );
};

export default Navbar;