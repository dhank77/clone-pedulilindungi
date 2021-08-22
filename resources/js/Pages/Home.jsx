import React from 'react'
import App from '../Layouts/App'

export default function Home() {
    return (
        <div>
            <div className="bg-banner-home w-full h-banner bg-cover bg-center bg-no-repeat">
                <div className="container py-10">
                    <div className="font-semibold text-5xl w-1/2 text-blue-600 leading-tight mt-24 font-sans">Lindungi diri dan sekitar dengan
                        berpartisipasi dalam program
                        Vaksinasi COVID-19</div>
                    <button className="bg-blue-500 text-white px-10 py-5 rounded mt-7 flex items-center">
                        <div className="font-bold uppercase mr-2">Pendaftaran Vaksinasi</div>
                        <img src="https://pedulilindungi.id/assets/ic_arrow_right.svg" alt="animation" className="animate-bounce" />
                    </button>
                </div>
            </div>
            <div className="container pb-20">
                <div className="w-full h-60 bg-white shadow-xl border border-gray-100 rounded-xl -mt-24 overflow-hidden">
                    <div className="px-6 pt-4">
                        <div className="font-semibold text-xl mb-5">Periksa Status Anda Dalam Program Vaksinasi COVID-19</div>
                        <hr />
                        <div className="flex justify-between w-full py-5 items-end">
                            <div className="w-full p-1">
                                <div className="font-semibold text-lg">Nama Lengkap</div>
                                <input type="text" className="bg-gray-100 w-full focus:outline-none px-5 py-4 rounded" placeholder="Tulis nama lengkap Anda disini" />
                            </div>
                            <div className="w-full p-1">
                                <div className="font-semibold text-lg">No KTP</div>
                                <input type="text" className="bg-gray-100 w-full focus:outline-none px-5 py-4 rounded" placeholder="Masukkan No KTP Anda" />
                            </div>
                            <div className="w-full p-1">
                                <button className="bg-blue-500 rounded px-5 py-4 w-full text-white uppercase">Periksa</button>
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-100 px-2 text-center py-3 w-full">
                        Periksa Hasil Tes COVID-19 <a href="https://cekmandiri.pedulilindungi.id/" target="_blank" className="font-semibold underline">disini</a>
                    </div>
                </div>

            </div>
            <div className="bg-gray-100 py-10 px-3">
                <div className="container">
                    <div className="font-bold text-blue-500 text-4xl text-center">Temukan Fasilitas Kesehatan yang Melayani Vaksinasi COVID-19</div>
                </div>
            </div>
        </div>
    )
}

Home.layout = (page) => <App children={page} title="Peduli Lindungi" />
