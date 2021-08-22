import { usePage } from '@inertiajs/inertia-react'
import React from 'react'
import Sidebar from '../Components/Sidebar'
import App from '../Layouts/App'

export default function Home() {

    const { user } = usePage().props;

    return (
        <>
            <div className="flex">

                <Sidebar/>

                <div className="bg-white rounded-xl px-5 py-4 w-full h-4/6">
                    <div className="flex items-center justify-between mb-1">
                        <div className="text-xl">Profil</div>
                        <button className="px-3 py-2 rounded-lg border-2 border-blue-500 text-blue-500">Perbarui Profil</button>
                    </div>
                    <hr />
                    <div>
                        <div className="ml-4">
                            <div className="mt-4 leading-loose">
                                <div className="font-bold">Nama Lengkap</div>
                                <div>M. Hamdani Ilham Latjoro</div>
                            </div>
                            <div className="mt-4 leading-loose">
                                <div className="font-bold">NIK</div>
                                <div>760203123456789</div>
                            </div>
                            <div className="mt-4 leading-loose">
                                <div className="font-bold">Nomor Ponsel</div>
                                <div>+62 823 9615 1291</div>
                            </div>
                            <div className="mt-4 leading-loose">
                                <div className="font-bold">Email</div>
                                <div>d41113512@gmail.com</div>
                            </div>
                            <div className="mt-4 leading-loose">
                                <div className="font-bold">Tanggal Lahir</div>
                                <div>05/01/1996</div>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Home.layout = (page) => <App children={page} title="Peduli Lindungi" />
