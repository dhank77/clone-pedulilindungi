import React from 'react'
import Navbar from '../Components/Navbar'
import {Head} from '@inertiajs/inertia-react'
import Footer from '../Components/Footer'

export default function App(props) {
    return (
        <div className="bg-gray-200">
            <Head title={props.title} />
            <Navbar/>

            <div className="container py-8 px-2 lg:px-20">
                {props.children}
            </div>

            <Footer />

        </div>
    )
}
