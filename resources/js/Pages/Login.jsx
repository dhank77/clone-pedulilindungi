import React from 'react'
import App from '../Layouts/App'

export default function Login() {

    return (
        <App title="Login">
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-lg w-full lg:w-2/5 antialiased overflow-hidden">
                    <div className="p-5">
                        <div className="font-bold text-lg text-grey-500 mb-4">Masuk</div>
                        <hr />
                        <br />
                        <div className="mb-4">
                            <div className="mb-1 text-lg font-semibold">No. Telepon</div>
                            <input type="text" class="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan No. Telepon" />
                        </div>
                        <div className="mb-6">
                            <div className="mb-1 text-lg font-semibold">Password</div>
                            <input type="password" class="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan Password" />
                        </div>
                        <div className="mb-2">
                            <button className="bg-blue-500 rounded-lg w-full h-12 text-white font-bold">MASUK</button>
                        </div>
                    </div>
                    <div className="flex items-center bg-blue-200 px-5 py-5">
                        <div className="text-center w-full">
                        Belum punya akun PeduliLindungi ? <a href="/register" className="font-bold text-blue-500 ml-1"> Daftar</a>
                        </div>
                    </div>
                </div>
            </div>
        </App>
    )
}
