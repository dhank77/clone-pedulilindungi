import React from 'react'
import App from '../Layouts/App'

export default function Register() {

    const submit = (e) => {
        e.preventDefault;
    }

    return (
        <App title="Daftar Vaksinasi">
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-lg w-full lg:w-2/5 antialiased overflow-hidden">
                    <div className="p-5">
                        <form onSubmit={(e) => submit()}>
                            <div className="font-bold text-2xl text-grey-500 mb-4">Daftar Vaksinasi</div>
                            <hr />
                            <br />
                            <div className="mb-4">
                                <div className="mb-1 text-lg font-semibold">Nama Lengkap</div>
                                <input type="text" name="name" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan Nama Lengkap" />
                            </div>
                            <div className="mb-4">
                                <div className="mb-1 text-lg font-semibold">No KTP</div>
                                <input type="text" name="nik" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan No KTP" />
                            </div>
                            <div className="mb-4">
                                <div className="mb-1 text-lg font-semibold">No. Telepon</div>
                                <input type="text" name="no_telp" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan No. Telepon" />
                            </div>
                            <div className="mb-4">
                                <div className="mb-1 text-lg font-semibold">Password</div>
                                <input type="password" name="password" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan Password" />
                            </div>
                            <div className="mb-6">
                                <div className="mb-1 text-lg font-semibold">Konfirmasi Password</div>
                                <input type="password" name="password_konfirmasi" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan Konfirmasi Password" />
                            </div>
                            <div className="mb-2">
                                <button type="submit" className="bg-blue-500 rounded-lg w-full h-12 text-white font-bold">DAFTAR</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center bg-blue-200 px-5 py-5">
                        <div className="text-center w-full">
                        Sudah punya akun PeduliLindungi ? <a href="/login" className="font-bold text-blue-500 ml-1"> Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}
