import React from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function Sidebar() {
    return (
        <div className="hidden lg:block bg-white mr-8 rounded-xl px-2 w-1/3 flex justify-between flex-col">
            <div className="p-5">
                <h4>M. Hamdani Ilham Latjoro</h4>
            </div>
            <hr />
            <div className="flex flex-col items-center py-5 pb-80">
                <Link className="px-4 py-5 hover:bg-blue-300 hover:text-white rounded-lg w-full" href="#">
                    <div className="flex">
                        <div className="mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <div>
                            Akun Saya
                        </div>

                    </div>
                </Link>
                <Link className="px-4 py-5 bg-blue-400 rounded-lg w-full" href="#">
                    <div className="flex justify-between">
                        <div className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                            </svg>
                            <div className="text-white">
                                Kotak Masuk
                            </div>
                        </div>
                        <div className="bg-white px-2 rounded-full">
                            0
                        </div>
                    </div>
                </Link>
                <Link className="px-4 py-5 hover:bg-blue-300 hover:text-white rounded-lg w-full" href="#">
                    <div className="flex">
                        <div className="mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                            </svg>
                        </div>
                        <div>
                            Riwayat & Tiket Vaksin
                        </div>
                    </div>
                </Link>
                <Link className="px-4 py-5 hover:bg-blue-300 hover:text-white rounded-lg w-full" href="#">
                    <div className="flex">
                        <div className="mr-4">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <div>
                            Sertifikat Vaksin
                        </div>
                    </div>
                </Link>
            </div>
            <hr />
            <Link className="flex px-4 my-2 py-5 hover:bg-blue-300 hover:text-white rounded-lg w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <h4>Keluar dari akun</h4>
            </Link>
        </div>
    )
}
