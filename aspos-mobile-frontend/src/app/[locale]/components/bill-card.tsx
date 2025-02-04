import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface OrderCardProps {
    imageUrl: string | StaticImageData; // Accept both string and StaticImageData
    title: string;
    description: string;
    price: number;
    quantity: number;
    status: string
}

export default function BillCard({ imageUrl, title, description, price, quantity }: OrderCardProps) {

    return (
        <div className="w-full py-4 flex gap-3 md:gap-6">
            {/* Image */}
            <div className="w-[85px] h-[85px] md:w-[105px] md:h-[105px] flex-shrink-0">
                <Image
                src={imageUrl}
                alt={title}
                width={100}
                height={100}
                className="rounded-lg object-contain w-full h-full"
                />
            </div>

            <div className='flex w-full  gap-3 md:gap-6'>
                {/* Content-Middle */}
                <div className="flex-grow flex flex-col justify-start">
                    <div>
                        <h3 className="text-base md:text-xl font-medium line-clamp-1 text-darkGray">{title}</h3>
                        <p className="text-sm md:text-lg text-lightGray line-clamp-1">{description}</p>
                    </div>
                   
                </div>
  
                {/* Content-Right */}
                <div className='flex flex-col justify-between items-end'>
                    <div className="text-base  md:text-xl font-semibold text-darkGray">฿{price}</div>
                    <div className="flex items-center justify-center w-[22px] h-[22px] md:w-[28px] md:h-[28px] rounded-full bg-green text-sm md:text-lg font-semibold text-white">
                        {quantity}
                    </div>
                </div>
            </div>
        </div>
    );
}
