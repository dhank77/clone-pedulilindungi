import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import App from '../../Layouts/App'

export default function Login({ errors }) {

    const [values, setvalues] = useState({
        'no_telp' : '',
        'password' : '',
    });

    const submitHandler = (e) => {
        e.preventDefault();
        Inertia.post(route('login'), values);
    }

    return (
        <div className="container py-12 px-2 lg:px-20">
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-lg w-full lg:w-2/5 antialiased overflow-hidden">
                    <div className="p-5">
                        <form onSubmit={submitHandler}>
                            <div className="font-bold text-lg text-grey-500 mb-4">Masuk</div>
                            <hr />
                            <br />
                            <div className="mb-4">
                                <div className="mb-1 text-lg font-semibold">No. Telepon</div>
                                <input name="no_telp" value={values.no_telp} onChange={(e) => setvalues({ ...values, no_telp : e.target.value})} type="number" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan No. Telepon" />
                                {errors && <span className="text-red-700">{errors.no_telp}</span>}
                            </div>
                            <div className="mb-6">
                                <div className="mb-1 text-lg font-semibold">Password</div>
                                <input name="password" value={values.password} onChange={(e) => setvalues({ ...values, password : e.target.value})} type="password" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan Password" />
                                {errors && <span className="text-red-700">{errors.password}</span>}
                            </div>
                            <div className="mb-2">
                                <button type="submit" className="bg-blue-500 rounded-lg w-full h-12 text-white font-bold">MASUK</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex items-center bg-blue-200 px-5 py-5">
                        <div className="text-center w-full">
                        Belum punya akun PeduliLindungi ? <a href="/register" className="font-bold text-blue-500 ml-1"> Daftar</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Login.layout = (page) => <App children={page} title="Login" />
