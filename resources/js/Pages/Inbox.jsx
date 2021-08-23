import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import App from '../Layouts/App'

export default function Inbox() {

    const { user } = usePage().props;

    return (
        <div className="container py-12 px-2 lg:px-20">
            <div className="flex">

                <Sidebar/>

                <div className="bg-white rounded-xl px-5 py-4 w-full h-4/6">
                    <p>Anda tidak memiliki kotak masuk!</p>
                </div>
            </div>
        </div>
    )
}

Inbox.layout = (page) => <App children={page} title="Kotak Masuk - Peduli Lindungi" />
