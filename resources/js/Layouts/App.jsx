import React, { useEffect } from 'react'
import {Head, usePage} from '@inertiajs/inertia-react'

import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import toast, { Toaster } from 'react-hot-toast'

export default function App(props) {

    const { flash, user } = usePage().props;
    
    flash.type && toast[flash.type](flash.messages)
    return (
        <div className={`${user ? 'bg-gray-200' : 'bg-gray-50'}`}>
            <Head title={props.title} />
            <Navbar/>
            <Toaster
                position="bottom-right"
            />
            
            {props.children}

            <Footer />

        </div>
    )
}
