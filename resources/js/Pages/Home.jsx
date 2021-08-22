import React from 'react'
import App from '../Layouts/App'

export default function Home() {
    return (
        <div className="h-1/4">
            <img src="https://pedulilindungi.id/assets/banner-home-vaccine.svg" alt="" className="w-full -z-10" />
        </div>
    )
}

Home.layout = (page) => <App children={page} title="Peduli Lindungi" />
