import { usePage } from '@inertiajs/inertia-react';
import React from 'react'
import Sidebar from '../Components/Sidebar';
import App from '../Layouts/App';

export default function Sertifikat() {
    const { user } = usePage().props;

    return (
        <div className="container py-12 px-2 lg:px-20">
            <div className="flex">

                <Sidebar />

                <div className="h-4/6 w-full">
                    <div className="bg-white rounded-xl px-5 py-4">
                        <div className="flex items-center justify-between mb-1">
                            <div className="text-xl">Sertifikat Vaksin</div>
                        </div>
                    </div>
                    
                    <div className="bg-white rounded-xl px-5 py-4">
                        <div className="flex items-center justify-between mb-1">
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

Sertifikat.layout = (page) => <App children={page} title="Sertifikat - Peduli Lindungi" />
