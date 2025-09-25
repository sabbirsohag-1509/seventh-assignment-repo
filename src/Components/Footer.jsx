import React from 'react';

const Footer = () => {
    return (
         <div className="bg-gray-900 text-white py-8 px-4 mt-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
                
                <div> 
                    <h1 className="font-bold text-lg mb-2 ">CS — Ticket System</h1>
                    <p className="text-sm text-gray-300">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                
                <div> 
                    <h1 className="font-bold text-lg mb-2">Company</h1>
                    <ul className="text-sm text-gray-300 space-y-1"> 
                        <li className='py-1'><a href="#">Home</a></li>
                        <li className='py-1'><a href="#">About Us</a></li>
                        <li className='py-1'><a href="#">Our Mission</a></li>
                        <li className='py-1'><a href="#">Contact Sale</a></li>
                    </ul>
                </div>

                <div> 
                    <h1 className="font-bold text-lg mb-2 ">Services</h1>
                    <p className='py-1'>Products & Services</p>
                    <p className='py-1'>Customer Stories</p>
                    <p className='py-1'>Download Apps</p>
                </div>

                <div> 
                    <h1 className="font-bold text-lg mb-2">Information</h1>
                    <p className='py-1'>Privacy Policy</p>
                    <p className='py-1'>Terms & Condition</p>
                    <p className='py-1'>Join Us</p>
                </div>

                <div> 
                    <h1 className="font-bold text-lg mb-2">Social Links</h1>
                    <div className='flex justify-center items-center gap-2 py-2'> 
                        <img className='w-4' src="/src/assets/x.png" alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className='flex justify-center items-center gap-2 py-2'> 
                        <img className='w-4' src="/src/assets/linkdin.png" alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className='flex justify-center items-center gap-2 py-2'> 
                        <img className='w-4' src="/src/assets/fb.png" alt="" />
                        <p>@CS — Ticket System</p>
                    </div>
                    <div className='flex items-center gap-2 py-2'> 
                        <img className='w-4' src="/src/assets/email.png" alt="" />
                        <p>support@cst.com</p>
                    </div>

                </div>

            </div>

            <hr className="border-gray-700 my-4" />

            <p className='text-center'>&copy; 2025 CS — Ticket System. All rights reserved.</p>
        </div>
    );
};
export default Footer;