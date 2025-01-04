import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface MenuCardProps {
    imageUrl: string | StaticImageData; 
    title: string;
    description: string;
    price: number;
    quantity: number;
}

export default function MenuCard({ imageUrl, title, description, price, quantity }: MenuCardProps) {
    return (
    <div className="w-full py-4 border-b border-borderGray flex gap-3">
        {/* Image */}
      <div className="w-[105px] h-[105px] flex-shrink-0">
        <Image
          src={imageUrl}
          alt={title}
          width={105}
          height={105}
          className="rounded-lg object-cover w-full h-full"
        />
      </div>

      <div className='flex w-full'>
        {/* Content */}
        <div className="flex-grow flex flex-col justify-between">
            <div>
                <h3 className="text-base font-medium line-clamp-1 text-darkGray">{title}</h3>
                <p className="text-sm text-lightGray line-clamp-2">{description}</p>
            </div>
            <div className='flex justify-between items-center'>
                <div className="text-lg font-semibold text-darkGray">฿{price}</div>
                <div className="flex items-center justify-center w-[22px] h-[22px] rounded-full bg-green text-[13px] font-semibold text-white ">{quantity}</div>
            </div>
        </div>
      </div>
    </div>
  );
}
