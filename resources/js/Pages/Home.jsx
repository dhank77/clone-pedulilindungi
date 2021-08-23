import { Link } from '@inertiajs/inertia-react'
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
                    <Link as="button" href={route('register')} className="bg-blue-500 text-white px-10 py-5 rounded mt-7 flex items-center">
                        <div className="font-bold uppercase mr-2">Pendaftaran Vaksinasi</div>
                        <img src="https://pedulilindungi.id/assets/ic_arrow_right.svg" alt="animation" className="animate-bounce" />
                    </Link>
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
                <div className="container flex flex-col items-center">
                    <div className="font-bold text-blue-500 text-4xl text-center">Temukan Fasilitas Kesehatan yang Melayani Vaksinasi COVID-19</div>
                    <div className="flex bg-gray-200 w-3/4 mt-10 rounded py-1 px-3">
                        <div className="py-4 px-5">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                        <input type="text" className="w-full focus:outline-none bg-transparent" placeholder="Cari Faskes (Contoh: nama Klinik/Puskesmas/Kecamatan)" />
                        <button className="bg-blue-500 px-7 py-1 text-white rounded">
                            Cari
                        </button>
                    </div>
                </div>
            </div>
            <div className="container p-20 flex justify-center">
                <div className="flex justify-around w-3/4">
                    <div className="text-blue-500 w-1/3 font-bold text-4xl">Vaksinasi <br />COVID-19</div>
                    <div className="w-2/3 text-justify	">
                        Pelaksanaan vaksinasi COVID-19 bertujuan untuk memutus rantai penularan penyakit dan menghentikan wabah COVID-19. Vaksin COVID-19 bermanfaat untuk memberi perlindungan tubuh agar tidak jatuh sakit akibat COVID-19 dengan cara menimbulkan atau menstimulasi kekebalan spesifik dalam tubuh dengan pemberian vaksin.
                        <br /><br />

                        Pelayanan vaksinasi COVID-19 dilakukan oleh dokter, perawat atau bidan yang memiliki kompetensi dan dilaksanakan di Fasilitas Pelayanan Kesehatan milik Pemerintah Pusat, Pemerintah Daerah Provinsi, Pemerintah Daerah Kabupaten/Kota atau milik masyarakat/swasta yang memenuhi persyaratan yang sudah ditentukan oleh Kementerian Kesehatan Indonesia.
                        <br /><br />

                        Pada tahap awal ini, vaksin COVID-19 akan diberikan kepada seluruh Tenaga Kesehatan, Asisten Tenaga Kesehatan, Tenaga penunjang serta mahasiswa yang menjalankan pendidikan profesi kedokteran yang bekerja pada fasilitas pelayanan kesehatan. Vaksin akan diberikan kepada petugas pelayanan publik yang terlibat secara langsung memberikan pelayanan kepada masyarakat.
                        <br /><br />

                        Selain sasaran target dapat melakukan vaksinasi melalui <a href="#" className="text-blue-500">aplikasi PeduliLindungi</a> atau situs <b>pedulilindungi.id</b>, Sasaran juga dapat melakukan panggilan ke <b>*119#</b>
                        <br /><br />

                        Ayo berpartisipasi dalam program vaksinasi COVID-19 ini untuk melindungi Anda dan keluarga Anda dari COVID-19. Jalankan 3M, menggunakan masker, menjaga jarak, dan mencuci tangan untuk kebaikan kita semuanya.
                        <br /><br />

                        Informasi lebih lanjut mengenai vaksinasi COVID-19 di Indonesia dapat diakses pada laman <a className="text-blue-500" href="https://covid19.go.id/vaksin-covid19">https://covid19.go.id/vaksin-covid19</a>, atau melalui tautan berikut <a href="#" className="text-blue">FAQ COVID</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

Home.layout = (page) => <App children={page} title="Peduli Lindungi" />
