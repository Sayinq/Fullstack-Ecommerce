import React from 'react'
import Image from 'next/image';

import bannerImage from '../assets/banner-pc.png';

const Middle = () => {
    return (
      <section className="relative w-screen h-auto py-8 px-4">
        {/* Header PC */}
        <div id="header-pc" className="flex flex-col justify-start p-8 items-center w-full h-[600px] rounded-md bg-gradient-to-b from-[#130D24] to-[#000342] gap-y-6 relative overflow-hidden">
          <header className="flex flex-col text-start text-white gap-y-4">
            <p className="font-semibold">$1,699</p>
            <h2 className="text-2xl font-bold">PC NAME | R EDITION</h2>
            <p className="text-lg font-medium">
              Our brand-new Player PC powered by an Intel® Core™ i7 13700KF and NVIDIA® GeForce RTX™ 4070. An immensely powerful gaming PC with superb productivity with cutting-edge DDR5 memory.
            </p>
          </header>
          <button className="w-full h-[50px] p-2 text-white border-2 border-white rounded-lg">Shop PC NAME | R Edition</button>
          <aside className="absolute bottom-[-150px]">
            <Image
              src={bannerImage}
              alt="Header PC Image"
              className="w-full h-full object-cover rounded-md scale-[2.25]"
            />
          </aside>
        </div>
      </section>
    );
  };
  
  export default Middle;