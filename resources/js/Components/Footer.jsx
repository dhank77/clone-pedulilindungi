import React from 'react'

export default function Footer() {
    return (
        <div className="bg-blue-100 h-80">
            <div className="lg:container">
                <div className="py-10 lg:py-20">
                    <div className="border-b border-black">
                        <div className="lg:flex items-center justify-between mb-4">
                            <div>
                                <img src="https://pedulilindungi.id/assets/logo-with-text.svg" alt="logo" className="w-32 lg:w-60" />
                            </div>
                            <div>
                                <div className="text-lg mb-2">Didukung Oleh : </div>
                                <div className="flex">
                                    <div className="mr-4">
                                        <img className="h-4 lg:h-16" src="https://pedulilindungi.id/assets/logo_kpcpen.png" alt="kpcpen" />
                                    </div>
                                    <div className="mr-4">
                                        <img className="h-4 lg:h-16" src="https://pedulilindungi.id/assets/logo_kominfo.png" alt="kominfo" />
                                    </div>
                                    <div className="mr-4">
                                        <img className="h-4 lg:h-16" src="https://pedulilindungi.id/assets/logo_kemenkes.png" alt="kemenkes" />
                                    </div>
                                    <div className="mr-4">
                                        <img className="h-4 lg:h-16" src="https://pedulilindungi.id/assets/logo_bumn.png" alt="bumn" />
                                    </div>
                                    <div className="mr-4">
                                        <img className="h-4 lg:h-16" src="https://pedulilindungi.id/assets/logo_kemendagri.png" alt="kemendagri" />
                                    </div>
                                    <div className="mr-4">
                                        <img className="h-4 lg:h-16" src="https://pedulilindungi.id/assets/logo_tni.png" alt="tni" />
                                    </div>
                                    <div className="mr-4">
                                        <img className="h-4 lg:h-16" src="https://pedulilindungi.id/assets/logo_polri.png" alt="polri" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:flex justify-between">
                        <div className="flex flex-col lg:flex-row text-xs lg:text-sm">
                           <div> © PeduliLindungi. &nbsp;</div>
                           <div>All rights reserved.</div>
                        </div>
                        <br/>
                        <div className="text-xs lg:text-sm">KEMENTERIAN KOMUNIKASI DAN INFORMATIKA. Jalan Medan Merdeka Barat No.9, Jakarta Pusat, 10110</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
