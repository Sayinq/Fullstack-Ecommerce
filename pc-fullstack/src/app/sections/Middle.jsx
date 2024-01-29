import React from 'react'
import Image from 'next/image';

{/* Components */}
import ProductCard from '../components/ProductCard';
import BannerCard from '../components/BannerCard';
import BannerList from '../components/BannerList';

const Middle = () => {
    return (
      <section className="flex flex-col relative w-screen h-auto py-8">

        {/* Header PC Banner */}
        <BannerCard />

        {/* Prebuild Gaming PC Section */}
        <div className="w-11/12 lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto xl:px-20 py-12">
            <div className="space-y-2 mb-6 md:mb-8 lg:mb-10 w-11/12 md:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl text-center mx-auto">
                <h2 className="hyphens-auto text-center mx-auto text-[1.875rem] font-black text-headline">PC Prebuilt Gaming PCs</h2>
                <p className="text-center mx-auto text-paragraph">We use the latest generation performance components and configurations to get your gaming, fast.</p>
            </div>
        </div>

        <div className="flex flex-col items-center gap-y-12">
            {/* Product Component Map */}
            <ProductCard />
            {/* Middle Card Components (Kinda like news) */}
            <BannerList />
        </div>

        <div id="header-pc" className="flex xl:flex-row flex-col justify-start p-8 items-center w-full h-[550px] rounded-md bg-gradient-to-b from-[#130D24] to-[#000342] gap-y-6 relative overflow-hidden mt-12">
          <aside className="absolute bottom-[-100px]">
            <Image
              src="/assets/banner-pc.png"
              alt="Header PC Image"
              className="w-full h-full object-cover rounded-md scale-[1.75]"
              width={500}
              height={500}
            />
          </aside>
          <header className="flex flex-col text-start text-white gap-y-4">
            <div className="w-fit h-fit p-2 uppercase bg-indigo-600">
              <span>newest prebuilt lineup</span>
            </div>
            <div className="flex flex-col font-bold text-3xl">
              <span>New Look,</span>
              <span>Better Performance</span>
            </div>
            <p className="text-lg font-medium">
              Now built in our new custom cases.
            </p>
            <button className="w-full h-[50px] p-2 text-white border-2 border-white rounded-lg">Shop PC NAME | R Edition</button>
          </header>
        </div>

      </section>
    );
  };
  
  export default Middle;