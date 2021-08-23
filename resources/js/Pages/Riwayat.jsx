import { usePage } from '@inertiajs/inertia-react';
import React from 'react'
import Sidebar from '../Components/Sidebar';
import App from '../Layouts/App';

export default function Riwayat() {
    const { user } = usePage().props;

    return (
        <div className="container py-12 px-2 lg:px-20">
            <div className="flex">

                <Sidebar />

                <div className="h-4/6 w-full">
                    <div className="bg-white rounded-xl px-5 py-4">
                        <div className="flex items-center justify-between mb-1">
                            <div className="text-xl">Riwayat & Tiket Vaksin</div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl px-5 py-4">
                        <div className="flex items-center justify-between mb-1">
                            <div className="text-xl">Riwayat & Tiket Vaksin</div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

Riwayat.layout = (page) => <App children={page} title="Riwayat - Peduli Lindungi" />
