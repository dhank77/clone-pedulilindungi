import { Menu } from '@headlessui/react';
import { Link, usePage } from '@inertiajs/inertia-react'
import React, { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const { user } = usePage().props;

    return (
        <div className="border-b border-gray-300 bg-white">
            <div className="lg:container flex flex-col lg:flex-row items-center">
                <div className={`${isOpen ? 'block' : 'hidden'} lg:flex justify-between w-full flex-col lg:flex-row`}>
                    <div className="flex flex-col lg:flex-row">
                        <div className="flex items-center pr-8 py-5">
                            <div>
                                <Link href="/" className="uppercase font-semibold">
                                    <img src="https://pedulilindungi.id/assets/logo-with-text.svg" alt="peduliid" className="w-36 ml-4" />
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
                        <Link className="px-3 py-5 text-gray-700 hover:text-blue-300" href="/">Beranda</Link>
                        <Link className="px-3 py-5 text-gray-700 hover:text-blue-300" href="#">Tentang</Link>
                        <Link className="px-3 py-5 text-gray-700 hover:text-blue-300" href="#">Cara Kerja</Link>
                    </div>
                    {user ?
                        <Menu as="div" className="flex flex-col lg:flex-row items-center relative">
                            <Menu.Button className="px-5 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center shadow-sm">
                                <div className="bg-blue-400 rounded-full p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                    </svg>
                                </div>
                                <div className="text-gray-700">&nbsp;{user.name.split(" ")[0]}&nbsp;</div>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                                </svg>
                            </Menu.Button>
                            <Menu.Items className={`absolute bg-white z-10 py-2 mt-64 w-56 border border-gray-300 rounded`}>
                                <div className="w-full hover:bg-gray-100 py-2">
                                    <Link className="px-3 text-gray-700" href={route('profil')}>Akun Saya</Link>
                                </div>
                                <div className="w-full hover:bg-gray-100 py-2">
                                    <Link className="px-3 text-gray-700" href="#">Kotak Masuk</Link>
                                </div>
                                <div className="w-full hover:bg-gray-100 py-2">
                                    <Link className="px-3 text-gray-700" href="#">Riwayat & Tiket Vaksin</Link>
                                </div>
                                <div className="w-full hover:bg-gray-100 py-2">
                                    <Link className="px-3 text-gray-700" href="#">Sertifikat Vaksin</Link>
                                </div>
                                <div className="w-full hover:bg-gray-100 py-2">
                                    <Link className="px-3 text-gray-700" href="#">Keluar</Link>
                                </div>
                            </Menu.Items>

                        </Menu>
                        :
                        <div className="flex flex-col lg:flex-row">
                            <Link className="px-3 py-5 text-gray-700 hover:text-blue-300" href="/login">Login</Link>
                            <Link className="px-3 py-5 text-gray-700 hover:text-blue-300" href="/register">Register</Link>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
