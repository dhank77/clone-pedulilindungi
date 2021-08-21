import React from 'react'
import Navbar from '../Components/Navbar'
import {Head} from '@inertiajs/inertia-react'

export default function App(props) {
    return (
        <div className="bg-gray-200">
            <Head title={props.title} />
            <Navbar/>

            <div className="container py-8">
                {props.children}
            </div>
        </div>
    )
}
