import { Link } from '@inertiajs/inertia-react'
import React, { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="border-b border-gray-300 bg-white">
            <div className="lg:container flex flex-col lg:flex-row">
                <div className="flex items-center justify-between pr-8 py-5">
                    <div>
                        <Link href="/" className="uppercase font-semibold ">
                            <img src="https://pedulilindungi.id/assets/logo-with-text.svg" alt="peduliid" className="w-36" />
                        </Link>
                    </div>
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`${!isOpen ? 'block' : 'hidden'} h-5 w-5`} viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`${isOpen ? 'block' : 'hidden'} h-5 w-5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} lg:flex justify-between w-full flex-col lg:flex-row`}>
                    <div className="flex flex-col lg:flex-row">
                        <Link className="px-3 py-5 text-gray-700 hover:text-blue-300" href="">Home</Link>
                        <Link className="px-3 py-5 text-gray-700 hover:text-blue-300" href="">About</Link>
                        <Link className="px-3 py-5 text-gray-700 hover:text-blue-300" href="">Contact</Link>
                    </div>
                    <div className="flex flex-col lg:flex-row">
                        <Link className="px-3 py-5 text-gray-700 hover:text-blue-300" href="/login">Login</Link>
                        <Link className="px-3 py-5 text-gray-700 hover:text-blue-300" href="">Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
