import React from 'react';
import Image from 'next/image';

const BannerCard = ({ chip, headerTitle, description, shopText, bannerImage }) => {
  return (
    <div className="flex flex-col justify-start p-8 items-center w-full h-[600px] rounded-md bg-gradient-to-b from-[#130D24] to-[#000342] gap-y-6 relative overflow-hidden">
      <header className="flex flex-col text-start text-white gap-y-4">
        <span className="badge p-4">{chip}</span>
        <h2 className="text-2xl font-bold max-w-[250px]">{headerTitle}</h2>
        <p className="text-lg font-medium">{description}</p>
        <button className="w-[150px] h-[50px] p-2 text-white border-2 border-white rounded-lg">{shopText}</button>
      </header>
      <aside className="absolute bottom-[-75px]">
        <Image src={bannerImage} alt="Header PC Image" height={500} width={500} className="w-full h-full object-cover rounded-md scale-[1.75]" />
      </aside>
    </div>
  );
};

import bannerImage1 from '../../../public/assets/banner-pc.png';
import bannerImage2 from '../../../public/assets/banner-pc.png';

const BannerList = () => {

  const banners = [
    {
      chip: 'Test run?',
      headerTitle: 'Rent our most popular PC for $109/mo.',
      description: 'Get into PC gaming with no commitmentsupported by award-winning customer service and a lifetime warranty.',
      shopText: 'Rent now',
      bannerImage: '/assets/banner-pc.png',
    },
    {
        chip: 'Custom?',
        headerTitle: 'Build it your way.',
        description: "Let's bring in 2024 with a new custom built PC, your way. With the best quality parts to get your build where you want it.",
        shopText: 'Contact us',
        bannerImage: '/assets/banner-pc.png',
    },
  ];

  return (
    <div className="grid gap-y-10">
      {banners.map((banner, index) => (
        <BannerCard key={index} {...banner} />
      ))}
    </div>
  );
};

export default BannerList;
