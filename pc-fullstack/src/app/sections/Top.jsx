import React from 'react'
import Image from 'next/image'

import heroBG from '../assets/pc-custom-build.png';

const Top = () => {
    return (
        <section className="flex flex-col justify-center items-center w-screen h-screen bg-gradient-to-b from-[#130D24] to-[#000342] px-8 gap-y-4">
            <div className="w-[250px] h-atuo">
                <Image
                    src={heroBG}
                    alt="Hero BG Image"
                    className=""
                />
            </div>
            <div className="flex flex-col justify-center items-center text-center w-full max-w-[800px] text-white h-auto gap-y-4">
                <h2 className="text-4xl font-black">NAME PLACEHOLDER</h2>
                <p>Some descriptor about our fake PC Ecommerce website</p>
                <button className="p-2 px-6 bg-indigo-500 rounded-lg font-semibold">DA BUTTON</button>
            </div>
        </section>
    )
}

export default Top