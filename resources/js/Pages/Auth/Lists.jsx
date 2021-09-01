import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react'
import { usePrevious } from 'react-use';
import App from '../../Layouts/App'

export default function Lists({ peserta }) {
    const { data, links, from } = peserta;

    const [query, setQuery] = useState({
        search: '',
        show: '5'
    })

    const prevValues = usePrevious(query);

    const handleShow = (e) => {
        setQuery({ ...query, [e.target.id]: e.target.value});

    }

    useEffect(() => {
        if (prevValues) {
            console.log(query);
            Inertia.get("/lists/peserta", query, {
                replace: true,
                preserveState: true
            });
        }
    }, [query])
    return (
        <div className="container py-10">
            <label className="font-bold text-3xl">Daftar Peserta Vaksinasi</label>
            <div className="bg-white rounded-lg p-5">
                <div className="flex justify-between items-center">
                    <select name="show" id="show" className="bg-gray-100 p-2 rounded" onChange={handleShow}>
                        <option value="2">2</option>
                        <option selected="true" value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                    </select>
                    <input type="text" value={query.search} name="search" className="w-1/3 border p-2 border-gray-200 rounded-lg focus:outline-none mb-4" placeholder="Cari..." onChange={(e) => setQuery({ ...query, search: e.target.value })} />

                </div>
                <table className="table-auto border w-full border-collapse">
                    <thead>
                        <tr className="bg-blue-200">
                            <th className="border p-4 w-1">#</th>
                            <th className="border p-4">Nama Lengkap</th>
                            <th className="border p-4">No KTP</th>
                            <th className="border p-4">No Telepon</th>
                            <th className="border p-4">Tanggal Registrasi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((d, i) => (
                            <tr key={d.id}>
                                <td className="border p-2">{i + from}</td>
                                <td className="border">{d.name}</td>
                                <td className="border text-center">{d.nik}</td>
                                <td className="border text-center">{d.no_telp}</td>
                                <td className="border text-center">{new Date(d.created_at).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="p-4">
                    {links.map((l, k) => (
                        <Link as="button" disabled={l.url === null ? true : false} className={`${l.active ? 'bg-blue-300' : 'bg-blue-200'} ${l.url === null && 'text-gray-500'} px-4 py-2 rounded mr-1`} dangerouslySetInnerHTML={{ __html: l.label }} key={k} href={l.url} preserveState/>
                    ))}
                </div>
            </div>
        </div>
    )
}

Lists.layout = (p) => <App children={p} title="Daftar Peserta Vaksinasi" />
