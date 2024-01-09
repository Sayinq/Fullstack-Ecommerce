import React from 'react'

{/* Components */}
import ProductCard from '../components/ProductCard';
import BannerCard from '../components/BannerCard';
import BannerList from '../components/BannerList';

const Middle = () => {
    return (
      <section className="flex flex-col relative w-screen h-auto py-8 px-4">

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

      </section>
    );
  };
  
  export default Middle;