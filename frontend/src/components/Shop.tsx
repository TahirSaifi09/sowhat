/** @format */

import React from 'react';
import HoverButton from './HoverButton';
import ShopSlider from '@/components/ShopSlider';

const Shop = () => {
  return (
    <>
      <section className="">
        <div className="flex flex-col md:flex-row items-center justify-between  mx-auto">
          {/* Left Text Content */}
          <div className="text-center md:text-left flex flex-col gap-4 ml-[100px]">
            <h1 className="text-xs font-bold">PILATES READY</h1>
            <h2 className="text-3xl font-bold tracking-widest max-w-[360px]">
              ALLYOUCANFIT X SO WHAT
            </h2>
            <h1 className=" text-sm font-bold">
              with pilates instructor, Maria Luisa Valente
            </h1>
            <HoverButton />
          </div>

          {/* Right Shop Slider */}
          <div className="w-[63.50%]">
            <ShopSlider />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
