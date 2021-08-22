import { Inertia } from '@inertiajs/inertia';
import React, { useState } from 'react'
import App from '../../Layouts/App';

export default function Register({ errors }) {
    const [values, setvalues] = useState({
        name : "", 
        nik : "",
        no_telp : "",
        password : "",
        password_konfirmasi : "",
    });

    const changeHandler = (e) => setvalues({...values, [e.target.name]: e.target.value});

    const submitHandler = (e) => {
        e.preventDefault();
        Inertia.post(route('register'), values);
    }

    return (
        <>
            <div className="flex justify-center items-center">
                <div className="bg-white rounded-lg w-full lg:w-2/5 antialiased overflow-hidden">
                    <div className="p-5">
                        <form onSubmit={submitHandler}>
                            <div className="font-bold text-2xl text-grey-500 mb-4">Daftar Vaksinasi</div>
                            <hr />
                            <br />
                            <div className="mb-4">
                                <div className="mb-1 text-lg font-semibold">Nama Lengkap</div>
                                <input type="text" value={values.name} onChange={changeHandler} name="name" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan Nama Lengkap" />
                                {errors && <div className="text-red-700">{errors.name}</div>}
                            </div>
                            <div className="mb-4">
                                <div className="mb-1 text-lg font-semibold">No KTP</div>
                                <input type="number" value={values.nik} onChange={changeHandler} name="nik" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan No KTP" />
                                {errors && <div className="text-red-700">{errors.nik}</div>}
                            </div>
                            <div className="mb-4">
                                <div className="mb-1 text-lg font-semibold">No. Telepon</div>
                                <input type="number" value={values.no_telp} onChange={changeHandler} name="no_telp" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan No. Telepon" />
                                {errors && <div className="text-red-700">{errors.no_telp}</div>}
                            </div>
                            <div className="mb-4">
                                <div className="mb-1 text-lg font-semibold">Password</div>
                                <input type="password" value={values.password} onChange={changeHandler} name="password" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan Password" />
                                {errors && <div className="text-red-700">{errors.password}</div>}
                            </div>
                            <div className="mb-6">
                                <div className="mb-1 text-lg font-semibold">Konfirmasi Password</div>
                                <input type="password" value={values.password_konfirmasi} onChange={changeHandler} name="password_konfirmasi" className="w-full h-12 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-300 border-2 border-gray-300 p-3 bg-gray-200" placeholder="Masukkan Konfirmasi Password" />
                                {errors && <div className="text-red-700">{errors.password_konfirmasi}</div>}
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
        </>
    )
}

Register.layout = (page) => <App children={page} title="Daftar Vaksinasi" />
