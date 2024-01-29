import React from 'react';
import Image from 'next/image';

{/* Assets */}
import pcPlaceholder from '../assets/prebuilt-placeholder.png';

const ProductCard = ({ pcPlaceholder, pcName, pcEditionName, rating, specs, price, shopLink }) => {
  return (
    <div className="lg:max-w-md h-full first:mr-0 last:ml-0 px-4">
      <div className="flex flex-col h-full max-w-md relative">
        <div className="flex flex-col w-full h-full">
          <div className="relative w-full p-4 xl:p-10 mb-1 bg-gradient-to-b from-[#130D24] to-[#000342]">
            <a href={shopLink}>
              <div className="relative block overflow-hidden z-0 max-w-lg" aria-hidden="true">
                <Image src={pcPlaceholder} className="block w-[400px] h-auto" />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col w-full">
            <a href={shopLink}>
                <div className="flex-grow mb-3 mt-1">
                    <div className="flex flex-col gap-y-1 mb-4 flex-shrink-0 flex-grow-0 basis-full text-paragraph">
                        <div>
                            <p className="font-bold mb-1 text-sm md:text-lg md:leading-tight">{pcName}</p>
                        </div>
                        <div className="flex col-span-2 w-full">
                            <p className="text-xs">{pcEditionName}</p>
                        </div>
                        <div className="rating mt-2">
                            {Array.from({ length: 5 }, (_, index) => (
                            <input
                                key={index}
                                type="radio"
                                name={`rating-${index}`}
                                className={`mask mask-star-2 bg-button ${index < rating ? 'checked' : ''}`}
                            />
                            ))}
                        </div>
                    </div>
                </div>
            </a>
          <div className="pt-4 mb-4 flex-1 flex-grow min-h-[81px] basis-full text-paragraph">
            <p className="text-xs font-bold text-headline">PC Specs</p>
            {specs.map((spec, index) => (
              <p key={index} className="text-xs">
                {spec}
              </p>
            ))}
          </div>
          <div className="w-full">
            <div className="grid items-center mt-2 pt-4 border-t">
              <div className="col-span-2 md:col-span-1">
                <div className="flex flex-wrap w-full">
                  <p className="text-xs md:text-sm text-headline font-bold">{price}</p>
                </div>
              </div>
            </div>
            <div className="grid items-center mt-2 pt-4">
              <a className="pointer-events-auto group min-w-max flex items-center justify-center text-white text-xs bg-button rounded-md h-[50px]" href={shopLink}>
                Shop
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductList = () => {

  const products = [

    {
        pcPlaceholder: pcPlaceholder,
        pcName: 'PC NAME 1',
        pcEditionName: 'PC Edition Name Gaming PC',
        rating: 4,
        specs: ['Intel Core i5-12400F', 'NVIDIA GeForce RTX 3050', '16GB (2 X 8GB) 3200 MHz (max clock)'],
        price: '$749.99',
        shopLink: 'https://www.google.com',
    },
    {
        pcPlaceholder: pcPlaceholder,
        pcName: 'PC NAME 1',
        pcEditionName: 'PC Edition Name Gaming PC',
        rating: 4,
        specs: ['Intel Core i5-12400F', 'NVIDIA GeForce RTX 3050', '16GB (2 X 8GB) 3200 MHz (max clock)'],
        price: '$749.99',
        shopLink: 'https://www.google.com',
    },
    {
        pcPlaceholder: pcPlaceholder,
        pcName: 'PC NAME 1',
        pcEditionName: 'PC Edition Name Gaming PC',
        rating: 4,
        specs: ['Intel Core i5-12400F', 'NVIDIA GeForce RTX 3050', '16GB (2 X 8GB) 3200 MHz (max clock)'],
        price: '$749.99',
        shopLink: 'https://www.google.com',
    },
    {
        pcPlaceholder: pcPlaceholder,
        pcName: 'PC NAME 1',
        pcEditionName: 'PC Edition Name Gaming PC',
        rating: 4,
        specs: ['Intel Core i5-12400F', 'NVIDIA GeForce RTX 3050', '16GB (2 X 8GB) 3200 MHz (max clock)'],
        price: '$749.99',
        shopLink: 'https://www.google.com',
    },
    {
        pcPlaceholder: pcPlaceholder,
        pcName: 'PC NAME 1',
        pcEditionName: 'PC Edition Name Gaming PC',
        rating: 4,
        specs: ['Intel Core i5-12400F', 'NVIDIA GeForce RTX 3050', '16GB (2 X 8GB) 3200 MHz (max clock)'],
        price: '$749.99',
        shopLink: 'https://www.google.com',
    },
    {
        pcPlaceholder: pcPlaceholder,
        pcName: 'PC NAME 1',
        pcEditionName: 'PC Edition Name Gaming PC',
        rating: 4,
        specs: ['Intel Core i5-12400F', 'NVIDIA GeForce RTX 3050', '16GB (2 X 8GB) 3200 MHz (max clock)'],
        price: '$749.99',
        shopLink: 'https://www.google.com',
    },
      

  ];

  return (
    <div className="grid gap-x-3 gap-y-10 md:gap-x-5 grid-cols-2 justify-items-center lg:grid-cols-3">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
